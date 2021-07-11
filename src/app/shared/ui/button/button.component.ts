import { Component, HostBinding, Input, NgModule } from '@angular/core'

type ButtonType = 'primary' | 'secondary' | 'outline'

@Component({
  selector: 'md-button',
  template: ` <button data-hover=""><ng-content></ng-content></button> `,
})
export class ButtonComponent {
  @Input() type: ButtonType = 'primary'
  @HostBinding('class') get className(): ButtonType {
    return this.type
  }
}
@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
