import { DOCUMENT } from '@angular/common'
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core'
import { ResizeObserver } from '@juggle/resize-observer'
import LocomotiveScroll from 'locomotive-scroll'
import { DataService } from './services/data.service'

@Component({
  selector: 'md-root',
  template: `
    <md-cursor>
      <section data-scroll-container #el>
        <md-header>
          <li #hover>Home</li>
          <li #hover>About</li>
          <i class="fas fa-lightbulb" #hover (click)="toggleDarkMode()"></i>
        </md-header>

        <md-container>
          <router-outlet></router-outlet>
        </md-container>

        <main *ngIf="files$ | async as files">
          <!-- <ngx-md [path]="files[1].download_url"></ngx-md> -->
        </main>
      </section>
      <md-social></md-social>
    </md-cursor>
  `,
  styles: [
    `
      main {
        padding: 2rem 8vw;
      }

      i {
        color: var(--primary);
        cursor: pointer;
        margin-left: 1rem;
      }
    `,
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  scroll!: LocomotiveScroll
  @ViewChild('el', { static: true }) el!: ElementRef<HTMLElement>
  url = 'assets/md/a.md'
  files$ = this.dataService.repoFiles$

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
    this.document.body.classList.toggle('dark-mode')
  }
}
