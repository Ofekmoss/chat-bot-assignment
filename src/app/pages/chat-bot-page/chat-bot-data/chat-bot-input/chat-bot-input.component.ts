import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatbotService } from 'src/app/services/chatbot.service';

@Component({
  selector: 'app-chat-bot-input',
  templateUrl: './chat-bot-input.component.html',
  styleUrls: ['./chat-bot-input.component.css']
})
export class ChatBotInputComponent implements OnInit {
  chatbotForm: FormGroup;

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit(): void {
    this.chatbotForm = new FormGroup({
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.chatbotService.onNewMessage(this.chatbotForm.value.message);
    this.chatbotForm.reset();
  }
}
