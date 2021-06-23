import { NgModule } from '@angular/core'
import { HeaderModule } from './header/header.component'

@NgModule({
  imports: [HeaderModule],
  exports: [HeaderModule],
})
export class UiModule {}
