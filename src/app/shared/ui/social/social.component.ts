import {
  AfterViewInit,
  Component,
  ElementRef,
  NgModule,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core'
import { CursorComponent } from '@ui/cursor/cursor.component'

@Component({
  selector: 'md-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('hover') hoverEls!: QueryList<ElementRef>

  constructor(private readonly host: CursorComponent) {}

  ngAfterViewInit(): void {
    this.host.addHoverElements(this.hoverEls)
  }

  ngOnDestroy(): void {
    this.host.removeHoverElements(this.hoverEls)
  }
}

@NgModule({
  declarations: [SocialComponent],
  exports: [SocialComponent],
})
export class SocialModule {}
