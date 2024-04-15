import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'timeDate',
  standalone: true
})
export class TimeDatePipe implements PipeTransform {

  transform(inputDate: any, ...args: string[]): string {

    const date = new Date(inputDate);
    const now = new Date();

    if(date.getDay() == now.getDay() && date.getMonth() == now.getMonth() && date.getFullYear() == now.getFullYear()){
      return 'Today ' + date.getHours() + ':' + date.getMinutes();
    }

    if(date.getDay() == now.getDay() - 1 && date.getMonth() == now.getMonth() && date.getFullYear() == now.getFullYear()){
      return 'Yesterday ' + date.getHours() + ':' + date.getMinutes();
    }

    const month = date.toLocaleString('default',{month:'short'});
    const year = date.getFullYear().toString() === now.getFullYear().toString() ? '' : ' ' + date.getFullYear().toString();

    return month + ' ' + date.getDate() + ' ' + year;
  }


}




