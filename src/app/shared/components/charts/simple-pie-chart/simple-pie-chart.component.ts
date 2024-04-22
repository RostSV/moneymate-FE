import {Component, HostListener, Input} from '@angular/core';
import {LegendPosition, NgxChartsModule} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-simple-pie-chart',
  standalone: true,
  imports: [
    NgxChartsModule
  ],
  templateUrl: './simple-pie-chart.component.html'
})
export class SimplePieChartComponent {
  @Input()
  dataPC: any;
  animationPC = true;
  colorSchemePC = "picnic";
  labelsPC = false;
  doughnut = false;
  showLegend: boolean = true;
  legendTitle: string = "Categories";
  tooltipDisabled: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;
  maxLabelLength: number = 10;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event.target.innerWidth < 600){
      this.labelsPC = true;
      this.showLegend = false;
      this.maxLabelLength = 6;
    }else{
      this.labelsPC = false;
      this.showLegend = true;
      this.maxLabelLength = 10;
    }

  }
}
