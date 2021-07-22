import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  NgModule,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CursorComponent } from '@ui/cursor/cursor.component';

type ButtonType = 'primary' | 'secondary' | 'outline';

@Component({
  selector: 'md-button',
  template: `
    <a [href]="href">
      <button #hover><ng-content></ng-content></button>
    </a>
  `,
})
export class ButtonComponent implements AfterContentInit, OnDestroy {
  @Input() type: ButtonType = 'primary';
  @Input() href!: string;
  @HostBinding('class') get className(): ButtonType {
    return this.type;
  }
  @ViewChild('hover', { static: true }) hover!: ElementRef;

  constructor(private readonly host: CursorComponent) {}

  ngAfterContentInit(): void {
    this.host.addHoverElements([this.hover]);
  }

  ngOnDestroy(): void {
    this.host.removeHoverElements([this.hover]);
  }
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
