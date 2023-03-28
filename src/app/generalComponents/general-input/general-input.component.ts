import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from "@angular/forms"

@Component({
  selector: 'app-general-input',
  templateUrl: './general-input.component.html',
  styleUrls: ['./general-input.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ],
})
export class GeneralInputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() controlName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
