import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input, NgModule } from '@angular/core';

type ButtonType = 'primary' | 'secondary' | 'outline';

@Component({
  selector: 'md-button',
  template: `
    <a [href]="href" *ngIf="href">
      <button>{{ text }}</button>
    </a>

    <button *ngIf="!href">{{ text }}</button>
  `,
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary';
  @Input() href!: string;
  @Input() text = '';
  @HostBinding('class') get className(): ButtonType {
    return this.type;
  }
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
