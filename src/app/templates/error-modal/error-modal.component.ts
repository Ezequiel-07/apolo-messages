import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModelAlertService } from 'src/app/interceptor/model-alert/model-alert.service';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent{
  @Input() data:any;
  @Output() value = new EventEmitter();
  constructor(private service: ModelAlertService) { }

  close(){
    this.value.emit();
  }
}
