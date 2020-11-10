import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient) { }
  getData(): Observable<Object[]>{
    let url='https://api.covidtracking.com/v1/us/daily.json';
    return this.http.get<Object[]>(url);
  }
}
