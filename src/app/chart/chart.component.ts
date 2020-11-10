import { ChartService } from './chart.service';
import { Component, NgZone, OnInit } from '@angular/core';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']

})



export class ChartComponent implements OnInit {
  private chart: am4charts.XYChart;

  private items=[];
  status:string;
  private total_url='https://api.covidtracking.com/v1/us/daily.json';
  constructor(private zone: NgZone,private service:ChartService) {

  }
  ngOnInit(): void {
    console.log(this.total_url);
      this.service.getData().subscribe(data=>{

        data.forEach(element=>{
          let da=element["date"].toString();
          let date=da.slice(0,4)+'-'+da.slice(4,6)+'-'+da.slice(6,8)

          let d={"date":date,"value":element['positive']};
          this.items.push(d);

        })

        this.items.reverse();
        this.chart.data=this.items;
        console.log(this.chart.data);

      })
  }

  onChange(): void{
    console.log(this.status);
    this.service.getData().subscribe(data=>{
      this.items=[];

      data.forEach(element=>{
        let da=element["date"].toString();
        let date=da.slice(0,4)+'-'+da.slice(4,6)+'-'+da.slice(6,8)

        let d={"date":date,"value":element[this.status]};
        this.items.push(d);

      })

      this.items.reverse();
      this.chart.data=this.items;

    })
  }


  // Run the function only in the browser
  browserOnly(f: () => void) {


      this.zone.runOutsideAngular(() => {
        f();
      });

  }

ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      /* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
// Create chart instance
let chart = am4core.create("chartdiv", am4charts.XYChart);
this.chart=chart;

// Set input format for the dates
chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

// Create axes
let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.dateX = "date";
series.tooltipText = "{value}"
series.strokeWidth = 1;
series.minBulletDistance = 10;

// Drop-shaped tooltips
series.tooltip.background.cornerRadius = 20;
series.tooltip.background.strokeOpacity = 0;
series.tooltip.pointerOrientation = "vertical";
series.tooltip.label.minWidth = 40;
series.tooltip.label.minHeight = 40;
series.tooltip.label.textAlign = "middle";
series.tooltip.label.textValign = "middle";

// Make bullets grow on hover
let bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth = 2;
bullet.circle.radius = 4;
bullet.circle.fill = am4core.color("#fff");

let bullethover = bullet.states.create("hover");
bullethover.properties.scale = 1.3;

// Make a panning cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panXY";
chart.cursor.xAxis = dateAxis;
chart.cursor.snapToSeries = series;

// Create vertical scrollbar and place it before the value axis
chart.scrollbarY = new am4core.Scrollbar();
chart.scrollbarY.parent = chart.leftAxesContainer;
chart.scrollbarY.toBack();

// Create a horizontal scrollbar with previe and place it underneath the date axis

let scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series);
chart.scrollbarX = scrollbarX;


dateAxis.start = 0.79;
dateAxis.keepSelection = true;
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
