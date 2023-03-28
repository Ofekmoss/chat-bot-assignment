import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-message',
  templateUrl: './general-message.component.html',
  styleUrls: ['./general-message.component.css']
})
export class GeneralMessageComponent implements OnInit {
  @Input() message: string;
  @Input() userMessage: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
