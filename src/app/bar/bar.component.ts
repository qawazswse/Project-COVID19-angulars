
import { Component, Inject, NgZone, PLATFORM_ID, Injectable, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import {BarService} from './bar.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";



@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']

})

export class BarComponent implements OnInit {
  private chart: am4charts.XYChart3D;
  private states_url='https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json';
  private data_url='https://api.covidtracking.com/v1/states/current.json';
  private states=['IL','NY','IA','CA'];
  inputState='';
  status = 'positive';
  buttonType='add';
  constructor(private zone: NgZone, private service:BarService) {

}
  ngOnInit(): void {
    let inputData=[];
    this.service.getData().subscribe(data=>{

      data.forEach(element=>{
        let state=element['state'].toUpperCase()
        if(this.states.includes(state)){

          let value=element[this.status];
          let d={"state":state,"value":value,"color":this.chart.colors.next()};
          inputData.push(d);
        }

      })


      this.chart.data=inputData;

      console.log(this.chart.data);




  })
  }
add():void{
    this.inputState=this.inputState.toUpperCase();

    let array=this.chart.data;
    this.service.getData().subscribe(data=>{
      if(!this.states.includes(this.inputState)){
      data.forEach(element=>{
        let state=element['state'].toUpperCase()
        if(state.includes(this.inputState)){

          let value=element[this.status];
          let d={"state":state,"value":value,"color":this.chart.colors.next()};
          array.push(d);
          this.states.push(state);
        }

      })}
      this.chart.data=array;

  })
}
deleteState() {
  const index: number = this.states.indexOf(this.inputState);
  if (index !== -1) {
      this.states.splice(index, 1);
  }
}
delete():void{
  this.deleteState();
  console.log(this.states);
  let inputData=[];
    this.service.getData().subscribe(data=>{

      data.forEach(element=>{
        let state=element['state'].toUpperCase()
        if(this.states.includes(state)){

          let value=element[this.status];
          let d={"state":state,"value":value,"color":this.chart.colors.next()};
          inputData.push(d);
        }

      })


      this.chart.data=inputData;

      console.log(this.chart.data);




  })
}

onSubmit(buttonType):void{
  if(buttonType==="add") {
    this.add();
}
if(buttonType==="delete"){
    this.delete();
}
}
statusChange(): void{
    let inputData=[];
    this.service.getData().subscribe(data=>{

      data.forEach(element=>{
        let state=element['state'].toUpperCase()
        if(this.states.includes(state)){

          let value=element[this.status];
          let d={"state":state,"value":value,"color":this.chart.colors.next()};
          inputData.push(d);
        }

      })


      this.chart.data=inputData;

      console.log(this.chart.data);




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
let chart = am4core.create("bardiv", am4charts.XYChart3D);
this.chart=chart;
// Add data

// Create axes
let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "state";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;

let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

// Create series
let series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueX = "value";
series.dataFields.categoryY = "state";
series.name = "value";
series.columns.template.propertyFields.fill = "color";
series.columns.template.tooltipText = "{valueX}";
series.columns.template.column3D.stroke = am4core.color("#fff");
series.columns.template.column3D.strokeOpacity = 0.2;

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

