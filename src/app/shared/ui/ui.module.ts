import { NgModule } from '@angular/core'
import { ButtonModule } from './button/button.component'
import { ContainerModule } from './container/container.component'
import { HeaderModule } from './header/header.component'
import { LogoModule } from './logo/logo.component'
import { SocialModule } from './social/social.component'

const MODULES = [HeaderModule, LogoModule, ContainerModule, ButtonModule, SocialModule]
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class UiModule {}
