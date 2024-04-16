import {Component, Input} from '@angular/core';
import {NgxChartsModule, ScaleType} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [
    NgxChartsModule
  ],
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent{
  //data
  @Input()
  single: any;
  //options
  gradient: boolean = false;

  colorScheme = {
    name: 'MyScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#00A084', '#F26C6B']
  };

  constructor() {
  }


}
