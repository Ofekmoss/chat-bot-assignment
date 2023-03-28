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

  async onNewMessage(message: string) {
    let botMessage = 'BOT REPLAY';
    if (this.askForWeather) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${message}&appid=${ChatbotConstants.WEATHER_API_KEY}&units=metric`;
      this.http.get(url).pipe(
        catchError((error) => {
          botMessage = "Not available city :("
          this.chat.push(new Conversation(message, botMessage));
          throw error;
        })
        ).subscribe((data: any) => {
          this.askForWeather = false;
          botMessage =  `Current temperature in ${message}: ${data.main.temp} degrees Celsius.`;
          this.chat.push(new Conversation(message, botMessage));
      });
      return;
    } 
    if (message.match(this.getRegExp(ChatbotConstants.CHATBOT_DAY)) || message.match(this.getRegExp(ChatbotConstants.CHATBOT_TIME))) {
      const dayName = ChatbotConstants.DAYS[new Date().getDay()];
      botMessage = `Today is ${dayName}`;
    } else if (message.match(this.getRegExp(ChatbotConstants.CHATBOT_WEATHER))) {
      this.askForWeather = true;
      botMessage = "Which city?";
    } else if (message.match(this.getRegExp(ChatbotConstants.CHATBOT_BYE_BYE))) {
      botMessage = "a random goodbye message";
      this.chatbotTerminate.next();
    } else if (message[0] === ChatbotConstants.CHATBOT_HIDDEN_KEY) {
      botMessage = "";
    } 
    this.chat.push(new Conversation(message, botMessage));
  }

  getChat() {
    return this.chat;
  }

  private getRegExp(word: string) {
    return new RegExp(`\\b${word}\\b`, 'gi')
  }

  // private getWeatherByCity(city: string) {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ChatbotConstants.WEATHER_API_KEY}&units=metric`;
  //   let botMessage: string;
  //   this.http.get(url).pipe(
  //     catchError((error) => {
  //       botMessage = "Not available city :("
  //       return botMessage;
  //     })
  //     ).subscribe((data: any) => {
  //       this.askForWeather = false;
  //       botMessage =  `Current temperature in ${city}: ${data.main.temp} degrees Celsius.`;
  //       console.log(botMessage);
  //       return botMessage;
  //   });
  // }
}
