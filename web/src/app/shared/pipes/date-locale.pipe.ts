import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'datelocale' })
export class DateLocalePipe implements PipeTransform {
    transform(value: any): any {
        moment.locale('pl');
        let date = new Date(value);
        console.log(date)
        if (date.toString() !== "Invalid Date") {
            if (value.includes("T")) {
                return moment(date).format('LT');
            } else {
                return moment(date).format('ll');
            }
        } else {
            return value;
        }
    }
}
