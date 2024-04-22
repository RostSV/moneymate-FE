import {Component, HostListener, Input} from '@angular/core';
import {NgxChartsModule} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-horizontal-chart',
  standalone: true,
  imports: [
    NgxChartsModule
  ],
  templateUrl: './horizontal-chart.component.html'
})
export class HorizontalChartComponent {
  @Input()
  single: any;
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showLegend: boolean = false;
  colorScheme = 'picnic';
  trimYAxisTicks: boolean = true
  maxYAxisTickLength: number = 10;
  roundDomains: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth < 800){
      this.maxYAxisTickLength = 6;
    }else{
      this.maxYAxisTickLength = 10;
    }

  }
}
