import { NgModule } from '@angular/core'
import { HeaderModule } from './header/header.component'
import { CursorModule } from './cursor/cursor.component'

@NgModule({
  imports: [HeaderModule, CursorModule],
  exports: [HeaderModule, CursorModule],
})
export class UiModule {}
