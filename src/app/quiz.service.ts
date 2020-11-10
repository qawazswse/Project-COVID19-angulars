import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  score : number;
  setScore(InputScore) : void {
    this.score = InputScore;
  }
  getScore() : number {
    return this.score;
  }
}
