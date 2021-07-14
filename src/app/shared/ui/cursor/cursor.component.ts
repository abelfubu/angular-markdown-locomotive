import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  OnDestroy,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core'
import { getMousePos, lerp } from '@utils/utils'
import gsap from 'gsap'

type ElementRefList = ElementRef[] | QueryList<ElementRef>

@Component({
  selector: 'md-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements AfterContentInit, OnDestroy {
  @Input() color = 'var(--primary)'
  @Input() radius = 40

  hoverElements!: ElementRef[]

  @ViewChild('cursorInner', { static: true }) cursorInner!: ElementRef<SVGCircleElement>
  @ViewChild('feTurbulence', { static: true }) feTurbulence!: ElementRef
  @ViewChild('svg', { static: true }) svg!: ElementRef

  mouse = { x: 0, y: 0 }
  bounds!: DOMRect
  filterId = '#filter-1'
  tl!: gsap.core.Timeline
  primitiveValues = { turbulence: 0 }
  renderedStyles: Record<string, { previous: number; current: number; amt: number }> = {
    tx: { previous: 0, current: 0, amt: 0.2 },
    ty: { previous: 0, current: 0, amt: 0.2 },
    radius: { previous: this.radius, current: this.radius, amt: 0.5 },
  }
  listeners: (() => void)[] = []

  @HostListener('window:mousemove', ['$event']) onMouseMove(event: unknown): void {
    this.mouse = getMousePos(event as MouseEvent)
  }

  constructor(private readonly renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.createTimeline()
    this.bounds = this.svg.nativeElement.getBoundingClientRect()
    this.onMouseMoveEv()
  }

  onMouseMoveEv = (): void => {
    this.renderedStyles.tx.previous = this.mouse.x - this.bounds.width / 2
    this.renderedStyles.ty.previous = this.mouse.y - this.bounds.height / 2
    gsap.to(this.svg.nativeElement, {
      duration: 0.9,
      ease: 'Power3.easeOut',
      opacity: 1,
    })
    requestAnimationFrame(() => this.render())
  }

  private addHoverListeners(elements: ElementRefList): void {
    elements.forEach(({ nativeElement: el }) => {
      const enterListener = this.renderer.listen(el, 'mouseenter', () => this.enter())
      const leaveListener = this.renderer.listen(el, 'mouseleave', () => this.leave())
      this.listeners = [...this.listeners, enterListener, leaveListener]
    })
  }

  addHoverElements(elements: ElementRefList): void {
    this.hoverElements = [...elements]
    this.addHoverListeners(elements)
  }

  removeHoverElements(elements: ElementRefList): void {
    elements.forEach((el) => this.hoverElements.splice(this.hoverElements.indexOf(el), 1))
    this.listeners.forEach((fn) => fn())
    this.addHoverListeners(this.hoverElements)
  }

  render(): void {
    this.renderedStyles.tx.current = this.mouse.x - this.bounds.width / 2
    this.renderedStyles.ty.current = this.mouse.y - this.bounds.height / 2

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt,
      )
    }

    const translateX = this.renderedStyles.tx.previous
    const translateY = this.renderedStyles.ty.previous
    const translate = `translateX(${translateX}px) translateY(${translateY}px)`
    this.renderer.setStyle(this.svg.nativeElement, 'transform', translate)
    const cursor = this.cursorInner.nativeElement
    this.renderer.setAttribute(cursor, 'r', String(this.renderedStyles.radius.current))
    requestAnimationFrame(() => this.render())
  }

  createTimeline(): void {
    this.tl = gsap
      .timeline({
        paused: true,
        onStart: () => {
          this.renderer.setStyle(this.cursorInner.nativeElement, 'filter', `url(${this.filterId}`)
        },
        onUpdate: () =>
          this.renderer.setAttribute(
            this.feTurbulence.nativeElement,
            'baseFrequency',
            String(this.primitiveValues.turbulence),
          ),
        onComplete: () => {
          this.renderer.setStyle(this.cursorInner.nativeElement, 'filter', 'none')
        },
      })
      .to(this.primitiveValues, {
        duration: 0.4,
        startAt: { turbulence: 0.09 },
        turbulence: 0,
      })
  }

  enter(): void {
    this.renderedStyles.radius.current = this.radius * 1.2
    this.tl.restart()
  }

  leave(): void {
    this.renderedStyles.radius.current = this.radius
    this.tl.progress(1).kill()
  }

  ngOnDestroy(): void {
    this.listeners.forEach((fn) => fn())
  }
}

@NgModule({
  declarations: [CursorComponent],
  exports: [CursorComponent],
})
export class CursorModule {}
