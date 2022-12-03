import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  body = {
    email:'',
    password:''
  }

  constructor(private service:AuthService) { }

  Signin(){
    this.service.signin(this.body).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        window.location.href = '/chat'
      }
    )
  }
}
