import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ResizeObserver } from '@juggle/resize-observer';
import LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'md-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('el', { static: true }) el!: ElementRef<HTMLElement>;
  @HostBinding('class.dark-mode') isDarkMode = true;

  scroll!: LocomotiveScroll;
  url = 'assets/md/a.md';

  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: this.el.nativeElement,
      smooth: true,
      scrollFromAnywhere: true,
      resetNativeScroll: false,
    });
  }

  ngAfterViewInit(): void {
    const ro = new ResizeObserver((entries) =>
      entries.forEach(() => this.scroll && this.scroll.update()),
    );
    ro.observe(this.el.nativeElement);
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
