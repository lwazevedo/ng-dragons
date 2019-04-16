import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from '@angular/common';

@Pipe({
      name: 'dateFormat'
})
export class DateFormat extends DatePipe implements PipeTransform {
      transform(value: any, args?: any): any {
            if (value && value !== ' ') {
                  var date = value instanceof Date ? value : new Date(value);
                  return super.transform(date, 'dd/MM/yyyy');
            }
      }
}