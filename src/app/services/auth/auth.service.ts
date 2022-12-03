import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'https://apolo-messages.onrender.com/api/'

  constructor(private http: HttpClient) { }

  signup(body:any, file:File){
    let formData = new FormData();
    formData.append('first_name', body.first_name);
    formData.append('last_name', body.last_name);
    formData.append('description', body.description);
    formData.append('email', body.email);
    formData.append('password', body.password);
    formData.append('file', file);
    return this.http.post<any>(this.URL + 'signup', formData);
  }

  signin(body:any){
    return this.http.post<any>(this.URL + 'signin', body);
  }

  authValidation(){
    let body = {token:localStorage.getItem('token')};
    return this.http.post<boolean>(this.URL + 'auth/validation', body);
  }
}
