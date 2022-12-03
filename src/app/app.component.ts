import { Component } from '@angular/core';
import { ModelAlertService } from './interceptor/model-alert/model-alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apolo';
  constructor(private service: ModelAlertService) { }
  
  ErrorStatus:boolean = false;
  values = {type:0,message:''};
  valueError = this.service.valueError.asObservable().subscribe(
    data => {
      this.values = data;
      this.ErrorStatus = true;
    }
  );

  closeHandler(){
    this.ErrorStatus = false;
  }
}
