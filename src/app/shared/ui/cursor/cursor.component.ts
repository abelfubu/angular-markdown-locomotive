import { DOCUMENT } from '@angular/common'
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  NgModule,
  OnDestroy,
  Renderer2,
  ViewChild,
} from '@angular/core'
import { getMousePos, lerp } from '@utils/utils'
import gsap from 'gsap'

@Component({
  selector: 'md-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements AfterViewInit, OnDestroy {
  mouse = { x: 0, y: 0 }
  bounds!: DOMRect
  filterId = '#filter-1'
  tl!: gsap.core.Timeline
  primitiveValues = { turbulence: 0 }
  renderedStyles: Record<string, { previous: number; current: number; amt: number }> = {
    tx: { previous: 0, current: 0, amt: 0.2 },
    ty: { previous: 0, current: 0, amt: 0.2 },
    radius: { previous: 60, current: 60, amt: 0.2 },
  }
  listeners = [(): unknown => null]

  @ViewChild('cursorInner', { static: true }) cursorInner!: ElementRef<SVGCircleElement>
  @ViewChild('feTurbulence', { static: true }) feTurbulence!: ElementRef
  @ViewChild('svg', { static: true }) svg!: ElementRef

  @HostListener('window:mousemove', ['$event']) onMouseMove(event: MouseEvent): void {
    this.mouse = getMousePos(event)
  }

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.createTimeline()
    this.bounds = this.svg.nativeElement.getBoundingClientRect()
    this.onMouseMoveEv()
    this.queryHoverableItems()
  }

  onMouseMoveEv = (): void => {
    this.renderedStyles.tx.previous = this.renderedStyles.tx.current =
      this.mouse.x - this.bounds.width / 2
    this.renderedStyles.ty.previous = this.renderedStyles.ty.current =
      this.mouse.y - this.bounds.height / 2
    gsap.to(this.svg.nativeElement, { duration: 0.9, ease: 'Power3.easeOut', opacity: 1 })
    requestAnimationFrame(() => this.render())
  }

  private queryHoverableItems() {
    const anchors = this.document.querySelectorAll('li')
    anchors.forEach((el) => {
      const enterListener = this.renderer.listen(el, 'mouseenter', () => this.enter())
      const leaveListener = this.renderer.listen(el, 'mouseleave', () => this.leave())
      this.listeners = [...this.listeners, enterListener, leaveListener]
    })
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
    this.renderer.setAttribute(cursor, 'r', String(this.renderedStyles.radius.previous))
    requestAnimationFrame(() => this.render())
  }

  createTimeline(): void {
    // init timeline
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
    this.renderedStyles.radius.current = 100
    this.tl.restart()
  }

  leave(): void {
    this.renderedStyles.radius.current = 60
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
