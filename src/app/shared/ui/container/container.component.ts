import { Component, HostBinding, Input, NgModule } from '@angular/core'

@Component({
  selector: 'md-container',
  template: ` <ng-content></ng-content> `,
  styles: [
    `
      :host {
        display: block;
        padding: 2rem 4rem;
        margin: auto;
      }
    `,
  ],
})
export class ContainerComponent {
  @Input() maxWidth = 1100
  @HostBinding('style.max-width') width = this.maxWidth + 'px'
}

@NgModule({
  declarations: [ContainerComponent],
  exports: [ContainerComponent],
})
export class ContainerModule {}