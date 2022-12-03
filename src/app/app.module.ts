import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'https://apolo-messages.onrender.com/', options: {transports: ["websocket"]} };

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ChatComponent } from './components/chat/chat.component';
import { SearchAccountComponent } from './templates/search-account/search-account.component';
import { ChatContactsBarComponent } from './templates/chat-contacts-bar/chat-contacts-bar.component';
import { NavComponent } from './templates/nav/nav.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ErrorModalComponent } from './templates/error-modal/error-modal.component';
import { ErrorHandlerService } from './interceptor/error-handler/error-handler.service';
import { ModelAlertService } from './interceptor/model-alert/model-alert.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ChatComponent,
    SearchAccountComponent,
    ChatContactsBarComponent,
    NavComponent,
    SignupComponent,
    SigninComponent,
    ErrorModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorHandlerService,
      multi:true
    },
    ModelAlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
