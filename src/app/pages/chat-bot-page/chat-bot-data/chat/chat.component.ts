import { Component, OnInit } from '@angular/core';
import { ChatbotService } from 'src/app/services/chatbot.service';
import { Conversation } from 'src/app/shared/conversation.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chat: Conversation[];

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.chat = this.chatbotService.getChat();
  }

}
