import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  userName: string;
  constructor(private auth: AngularFireAuth) {
    this.user = auth.authState;
  }

  login(): void {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        this.userName = result.user.displayName;
        sessionStorage.setItem('loggedIn', '1');
      });
  }

  logout(): void {
    this.auth.signOut()
      .then(result => {
        sessionStorage.removeItem('loggedIn');
      });
  }

  isLoggedIn(): boolean {
    const loggedIn = sessionStorage.getItem('loggedIn');
    return(loggedIn != null);
  }

  getUserName(): string {
    return this.userName;
  }
}
