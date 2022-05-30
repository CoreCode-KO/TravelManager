import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencychange' })
export class CurrencyChangePipe implements PipeTransform {
    transform(value: any): any {

        return `<span class="local-price"><span class="cost">${value}</span><span class="currency">${'zł'}</span></span>`;
    }
}
