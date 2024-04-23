import {Component, Input} from '@angular/core';
import {LegendPosition, NgxChartsModule} from "@swimlane/ngx-charts";

@Component({
  selector: 'app-simple-pie-chart',
  standalone: true,
  imports: [
    NgxChartsModule
  ],
  templateUrl: './simple-pie-chart.component.html'
})
export class SimplePieChartComponent{
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

}
