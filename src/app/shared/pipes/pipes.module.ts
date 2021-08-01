import { NgModule } from '@angular/core';
import { SubstringPipeModule } from './substring.pipe';

@NgModule({
  imports: [SubstringPipeModule],
  exports: [SubstringPipeModule],
})
export class PipesModule {}
