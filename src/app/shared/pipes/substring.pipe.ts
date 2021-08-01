import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring',
})
export class SubstringPipe implements PipeTransform {
  transform(value: string): string {
    return value.length > 50 ? `${value.substring(0, 50)}...` : value;
  }
}

@NgModule({
  declarations: [SubstringPipe],
  exports: [SubstringPipe],
})
export class SubstringPipeModule {}
