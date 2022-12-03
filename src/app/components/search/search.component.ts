import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() id_user = new EventEmitter();
  users:Array<any> = [];

  constructor(private socket:Socket) { }

  selectChat(id:String, email:String){
    this.id_user.emit({id:id, email:email});
  }

  ngOnInit(): void {
    this.socket.on('ping', ()=>{
      this.socket.emit('pong', 'pong');
      this.users = [];
    });
    this.socket.on('users-in-connection', (data:any)=>{
      if(data[0] != undefined){
        this.users.push(data[0]);
        this.selectChat(data[0].socketId, data[0].user);
      }
    });
    this.socket.emit('users-in-connection', 'data');
  }
}
