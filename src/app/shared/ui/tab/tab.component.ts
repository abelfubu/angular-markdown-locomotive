import { Component, Input } from '@angular/core'

@Component({
  selector: 'md-tab',
  template: `
    <section *ngIf="selected">
      <ng-content></ng-content>
    </section>
  `,
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() title!: string
  @Input() selected = false
}
