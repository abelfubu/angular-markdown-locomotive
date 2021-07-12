import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { ButtonModule } from '@ui/button/button.component'
import { TabsModule } from '@ui/tab-group/tab-group.component'
import { ExperienceComponent } from './components/experience/experience.component'
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component'

@NgModule({
  declarations: [HomeComponent, ExperienceComponent, AboutComponent, HeroComponent],
  imports: [CommonModule, HomeRoutingModule, ButtonModule, TabsModule],
})
export class HomeModule {}
