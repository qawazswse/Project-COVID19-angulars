import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

export class SignUp {
  public userName: string;
  public email: string;
  public password: string;
  public confirmPassword: string;
}

export class Login {
  public userName: string;
  public password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public auth: AuthService) {}
  modelLogin = new Login();
  modelSignUp = new SignUp();
  public signed: boolean;
  public isIn: boolean;
  public userName: string;
  ngOnInit(): void {
    this.signed = true;
    this.isIn = this.auth.isLoggedIn();
  }

  onSubmit(form): void {
    this.userName = form.value.name;
    this.isIn = true;
  }
  onGoToSignUp(): void {
    this.signed = !this.signed;
  }

  googleLogIn(): void {
    this.auth.login();
    this.userName = this.auth.getUserName();
    this.isIn = true;
  }

  logOut(): void {
    this.auth.logout();
    this.isIn = false;
    this.signed = true;
  }

}
