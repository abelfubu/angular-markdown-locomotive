import { DOCUMENT } from '@angular/common'
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core'
import { ResizeObserver } from '@juggle/resize-observer'
import LocomotiveScroll from 'locomotive-scroll'
import { DataService } from './services/data.service'

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('el', { static: true }) el!: ElementRef<HTMLElement>
  scroll!: LocomotiveScroll
  url = 'assets/md/a.md'
  files$ = this.dataService.repoFiles$
  isDarkMode = true

  constructor(
    private readonly dataService: DataService,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: this.el.nativeElement,
      smooth: true,
      scrollFromAnywhere: true,
      resetNativeScroll: false,
    })
  }

  ngAfterViewInit(): void {
    const ro = new ResizeObserver((entries) =>
      entries.forEach(() => this.scroll && this.scroll.update()),
    )
    ro.observe(this.el.nativeElement)
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode
    this.document.body.classList.toggle('dark-mode')
  }
}
