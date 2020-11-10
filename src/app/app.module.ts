import { ChartService } from './chart/chart.service';
import { BarService } from './bar/bar.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RecordComponent } from './record/record.component';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { BarComponent } from './bar/bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { QuizComponent } from './quiz/quiz.component';
import { MustMatchDirective } from './directives/match-value.directive';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthGuard} from './auth.guard';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: 'lineC', component: ChartComponent},
  {path: 'barC', component: BarComponent},
  {path: 'table', component: TableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'record', component: RecordComponent}
  //{path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    BarComponent,
    TableComponent,
    LoginComponent,
    QuizComponent,
    RecordComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BarService,ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
