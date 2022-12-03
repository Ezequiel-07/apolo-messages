import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ModelAlertService } from '../model-alert/model-alert.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor{

  constructor(private serviceLoad:ModelAlertService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token') || null;

    if(token != null){
      const reqClone = req.clone({
        headers: req.headers.set('token', token)
      });
      return next.handle(reqClone).pipe(
        catchError((err) => this.serviceLoad.show(err))
      );
    }

    return next.handle(req).pipe(
      catchError((err) => this.serviceLoad.show(err))
    );
  }
}
