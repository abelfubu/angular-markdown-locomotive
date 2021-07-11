import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ResizeObserver } from '@juggle/resize-observer'
import LocomotiveScroll from 'locomotive-scroll'
import { DataService } from './services/data.service'
// import 'prismjs/components/prism-cpp'
// import 'prismjs/components/prism-csharp'
// import 'prismjs/components/prism-css'
// import 'prismjs/components/prism-diff'
// import 'prismjs/components/prism-java'
// import 'prismjs/components/prism-javascript'
// import 'prismjs/components/prism-perl'
// import 'prismjs/prism'

@Component({
  selector: 'md-root',
  template: `
    <section data-scroll-container #el>
      <md-header>
        <li #li>Home</li>
        <li #li>About</li>
      </md-header>

      <main *ngIf="files$ | async as files">
        <ngx-md [path]="files[1].download_url"></ngx-md>
        <router-outlet></router-outlet>
      </main>
    </section>
    <md-cursor></md-cursor>
  `,
  styles: [
    `
      main {
        padding: 2rem 8vw;
      }
    `,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  scroll!: LocomotiveScroll
  @ViewChild('el', { static: true }) el!: ElementRef<HTMLElement>
  url = 'assets/md/a.md'
  files$ = this.dataService.repoFiles$

  constructor(private readonly dataService: DataService) {}

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: this.el.nativeElement,
      smooth: true,
      direction: 'vertical',
    })
  }

  ngAfterViewInit(): void {
    const ro = new ResizeObserver((entries) =>
      entries.forEach(() => this.scroll && this.scroll.update()),
    )
    ro.observe(this.el.nativeElement)
  }
}
