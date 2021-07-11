import { Component, Input } from '@angular/core'

@Component({
  selector: 'md-tab',
  template: `
    <section *ngIf="selected">
      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
      :host::ng-deep li::marker {
        content: '*';
        color: var(--primary);
      }
    `,
  ],
})
export class TabComponent {
  @Input() title!: string
  @Input() selected = false
}
