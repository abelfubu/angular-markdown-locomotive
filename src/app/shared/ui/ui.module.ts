import { NgModule } from '@angular/core'
import { CursorModule } from './cursor/cursor.component'
import { HeaderModule } from './header/header.component'
import { LogoModule } from './logo/logo.component'

@NgModule({
  imports: [HeaderModule, CursorModule, LogoModule],
  exports: [HeaderModule, CursorModule, LogoModule],
})
export class UiModule {}
