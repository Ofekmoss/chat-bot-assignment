import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBotPageComponent } from './pages/chat-bot-page/chat-bot-page.component';
import { ChatBotHeaderComponent } from './pages/chat-bot-page/chat-bot-header/chat-bot-header.component';
import { ChatBotDataComponent } from './pages/chat-bot-page/chat-bot-data/chat-bot-data.component';
import { ChatComponent } from './pages/chat-bot-page/chat-bot-data/chat/chat.component';
import { ChatBotInputComponent } from './pages/chat-bot-page/chat-bot-data/chat-bot-input/chat-bot-input.component';
import { GeneralInputComponent } from './generalComponents/general-input/general-input.component';
import { GeneralButtonComponent } from './generalComponents/general-button/general-button.component';
import { GeneralMessageComponent } from './generalComponents/general-message/general-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatBotPageComponent,
    ChatBotHeaderComponent,
    ChatBotDataComponent,
    ChatComponent,
    ChatBotInputComponent,
    GeneralInputComponent,
    GeneralButtonComponent,
    GeneralMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
