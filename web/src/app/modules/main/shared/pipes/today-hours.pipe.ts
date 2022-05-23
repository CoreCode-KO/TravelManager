import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'todayhours' })
export class TodayHoursPipe implements PipeTransform {
    transform(value: any): any {
        let today = new Date();
        let todayDay = today.getDay();
        let todayHours = value[todayDay];
        return `${todayHours.openH}-${todayHours.closeH}`;
    }
}
