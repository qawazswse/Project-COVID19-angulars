import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Object[]>{
    let url='https://api.covidtracking.com/v1/states/current.json';
    return this.http.get<Object[]>(url);
  }
}
