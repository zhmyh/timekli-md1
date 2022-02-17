import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return Object.values(value).map( (x:any) => `${x.name} (${x.symbol})`).join(', ');
  }

}
