import { Injectable } from '@angular/core';
import { Conversation } from '../shared/conversation.model';
import * as ChatbotConstants from "../shared/chatbot.constants";
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private chat: Conversation[] = [];
  private askForWeather: boolean = false;
  
  public chatbotTerminate = new Subject<void>();

  constructor(private http: HttpClient) { }

  onNewMessage(message: string) {
    let botMessage;

    if (this.askForWeather) {
      botMessage = this.getWeatherMessageByCity(message).subscribe(
        (data: any) => {
          botMessage =  `Current temperature in ${message}: ${data.main.temp} degrees Celsius.`;
          this.chat.push(new Conversation(message, botMessage));
        },
        (error) => {
          botMessage =  `Couldn't find weather information for ${message}`;
          this.chat.push(new Conversation(message, botMessage));
      });
      return;
    }
    if (message.match(this.getRegExp(ChatbotConstants.CHATBOT_DAY)) || message.match(this.getRegExp(ChatbotConstants.CHATBOT_TIME))) {
      const dayName = ChatbotConstants.DAYS[new Date().getDay()];
      botMessage = `Today is ${dayName}`;
    } else if (message.match(this.getRegExp(ChatbotConstants.CHATBOT_WEATHER))) {
      this.askForWeather = true;
      botMessage = "For which city whould you like to know the weather?";
    } else if (message === ChatbotConstants.CHATBOT_BYE_BYE) {
      botMessage = "Goodbye :)";
      this.chatbotTerminate.next();
    } else if (message[0] === ChatbotConstants.CHATBOT_HIDDEN_KEY) {
      botMessage = "";
    } else {
      botMessage = message.split("").reverse().join("");
    }

    this.chat.push(new Conversation(message, botMessage));
  }

  getChat() {
    return this.chat;
  }

  private getRegExp(word: string) {
    return new RegExp(`\\b${word}\\b`, 'gi');
  }

  private getWeatherMessageByCity(city) {
    this.askForWeather = false;
    const url = ChatbotConstants.WEATHER_API.url(city);
    return this.http.get(url);
  }
}
