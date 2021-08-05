import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring',
})
export class SubstringPipe implements PipeTransform {
  transform(value: string | null, length = 50): string {
    if (!value) return '';
    return value.length > length ? `${value.substring(0, length)}...` : value;
  }
}

@NgModule({
  declarations: [SubstringPipe],
  exports: [SubstringPipe],
})
export class SubstringPipeModule {}
