import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring',
})
export class SubstringPipeMock implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}
