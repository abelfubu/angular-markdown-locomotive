import { NgModule } from '@angular/core';
import { PipesModule } from './pipes/pipes.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [UiModule, PipesModule],
  exports: [UiModule, PipesModule],
})
export class SharedModule {}
