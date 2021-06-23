import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { ResizeObserver } from '@juggle/resize-observer'
import LocomotiveScroll from 'locomotive-scroll'
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
      <md-header title="Markdown" [logo]="logo">
        <li #li>Home</li>
        <li #li>About</li>
      </md-header>
      <main>
        <ngx-md [path]="url"></ngx-md>
        <router-outlet></router-outlet>
      </main>
    </section>
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
  url = 'assets/a.md'
  logo = 'assets/images/palette.svg'

  ngOnInit() {
    this.scroll = new LocomotiveScroll({
      el: this.el.nativeElement,
      smooth: true,
    })
  }

  ngAfterViewInit() {
    const ro = new ResizeObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0]
        if (this.scroll) {
          this.scroll.update()
        }
      })
    })
    ro.observe(this.el.nativeElement)
  }
}
