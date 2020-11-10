import {Component, OnInit} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {string} from '@amcharts/amcharts4/core';
import {AuthService} from './auth.service';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Group-5 Project';
  // dataType: string = "";
  // sortMethod: string = "Highest";
  // dateOfData: Date = new Date("05/21/2020");
  // numberOfSelect: number = 5;

  // public show: boolean = true;

  // public buttonName:any = 'Show Date Table';
  constructor(public auth: AuthService, public quiz: QuizService) {}

  ngOnInit(): void {}


}
