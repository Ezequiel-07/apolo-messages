import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io'
import { messages } from 'src/app/messages';
import { AuthDataService } from 'src/app/interceptor/auth-data/auth-data.service';
import { ModelAlertService } from 'src/app/interceptor/model-alert/model-alert.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private socket: Socket, private authService: AuthDataService, private modelService:ModelAlertService) {}
  token = localStorage.getItem('token');
  body:messages = {
    id:'',
    user:'',
    msg:'',
    email:''
  }
  email = '';
  messages:Array<messages> = [];
  msg: Array<any> = [];

  initConnection(){
    this.socket.on('in-connection', (data:any)=>{
      if(data == 'error'){
        localStorage.removeItem('token');
        window.location.reload();
      };
      this.body.user = data.first_name;
      this.body.email = data.user;
      this.authService.save(data);
    });
    this.socket.emit('in-connection', this.token);
  }

  selectUser(data:any){
    this.body.id = data.id;
    this.email = data.email;
    this.loadMessages(data.email);
  }

  loadMessages(email:String){
    this.msg = [];
    for (let x = 0; x < this.messages.length; x++) {
      console.log(this.messages[x].email, email)
      if(this.messages[x].email == email){
        this.msg.push(this.messages[x]);
        console.log(true);
      }
      console.log(false)
    }
  }

  sendMessage() {
    if(this.body.msg == '' || this.body.msg == undefined || this.body.msg == null){
      this.modelService.showLocal({status:401, error:"the message can't be empty"});
      return;
    }
    if(this.body.id == '' || this.body.id == undefined || this.body.id == null){
      this.modelService.showLocal({status:401, error:"the message is not addressed to anyone"});
      return;
    }
    this.messages.push({email:this.email, id:'', msg:this.body.msg, user:this.body.user});
    this.socket.emit('emit-message', this.body);
    this.body.msg = '';
    this.loadMessages(this.email);
  }

  listenMessages() {
    this.socket.on('emit-message', (data:messages)=>{
      this.messages.push(data);
      this.loadMessages(data.email);
    });
  }

  ngOnInit(): void {
    this.listenMessages();
    this.initConnection();
  }

}
