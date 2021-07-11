import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { ButtonModule } from '@ui/button/button.component'
import { TabsModule } from '@ui/tab-group/tab-group.component'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ButtonModule, TabsModule],
})
export class HomeModule {}
