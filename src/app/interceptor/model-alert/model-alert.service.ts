import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { Notifications } from 'src/app/notifications';

@Injectable({
  providedIn: 'root'
})
export class ModelAlertService {

  constructor() { }

  valueError = new Subject <Notifications>();

  getNotification(){
    return this.valueError.asObservable();
  }

  show(error: HttpErrorResponse){
    if(error.status == 401 && error.error.error == 'token invalid'){
      localStorage.removeItem('token');
      window.location.reload();
    }
    const notificacion:Notifications = {
      type:error.status,
      message:error.error.error
    }
    this.valueError.next(notificacion);
    return throwError(error);
  }

  showLocal(error:any){
    const notificacion:Notifications = {
      type:error.status,
      message:error.error
    }
    this.valueError.next(notificacion);
  }
}