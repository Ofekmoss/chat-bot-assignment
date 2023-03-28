import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chat-bot-data',
  templateUrl: './chat-bot-data.component.html',
  styleUrls: ['./chat-bot-data.component.css']
})
export class ChatBotDataComponent implements OnInit {
  chatbotActive = true;

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.chatbotService.chatbotTerminate.subscribe(() => {
      this.chatbotActive = false;
    });
  }

}
