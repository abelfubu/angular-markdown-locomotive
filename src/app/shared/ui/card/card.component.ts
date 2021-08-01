import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'md-card',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        background-color: var(--primary-dark);
        border-radius: var(--radius-sm);
        box-shadow: 0 0 11px #0005;
        display: block;
        padding: 1.5rem;
      }
    `,
  ],
})
export class CardComponent {}

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class CardModule {}
