import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  body = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    description: ''
  }
  file:any;
  filePreview:any;

  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }

  getFile(e:any){
    console.log(e);
    if(e.target.files.lenght != 0){
      this.file = e.target.files[0];

      let reader = new FileReader();
      reader.onload = e => this.filePreview = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  Signup(){
    this.service.signup(this.body, this.file).subscribe(
      data => {
        localStorage.setItem('token', data.token);
        window.location.href = '/chat';
      });
  }
}
