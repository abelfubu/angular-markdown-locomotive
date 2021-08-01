import { Component, HostBinding, Input, NgModule } from '@angular/core';

@Component({
  selector: 'md-card',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        background-color: var(--primary-dark);
        background-position: center;
        background-size: cover;
        border-radius: var(--radius-sm);
        box-shadow: 0 0 11px #0005;
        display: block;
        background-blend-mode: overlay;
        padding: 1.5rem;
      }
    `,
  ],
})
export class CardComponent {
  @Input() bgImage? = '';
  @HostBinding('style.background-image') get image(): string {
    return `url(${this.bgImage})`;
  }
}

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
