import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthDataService {

  constructor() { }

  auth_data = new Subject<any>();

  save(data:any){
    this.auth_data.next(data);
  }

  getData(){
    return this.auth_data.asObservable();
  }
}
