import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'eventdate' })
export class EventDatePipe implements PipeTransform {
    transform(value: any): any {
        let date = new Date(value);
        moment.locale('pl');
        let day = moment(date).format('DD');
        let monthName = moment(date).format('MMM');
        return `<span class="event-date"><span class="event-date-day">${day}</span><span class="event-date-month-name">${monthName}</span></span>`;
    }
}
