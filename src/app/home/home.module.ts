import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from '@ui/button/button.component';
import { TabsModule } from '@ui/tab-group/tab-group.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { CardModule } from '@ui/card/card.component';
import { SubstringPipeModule } from '../shared/pipes/substring.pipe';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExperienceComponent,
    AboutComponent,
    HeroComponent,
    ProjectsComponent,
    RepositoriesComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    TabsModule,
    CardModule,
    SubstringPipeModule,
  ],
})
export class HomeModule {}
