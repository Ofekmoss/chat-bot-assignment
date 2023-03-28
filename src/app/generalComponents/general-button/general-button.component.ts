import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-button',
  templateUrl: './general-button.component.html',
  styleUrls: ['./general-button.component.css']
})
export class GeneralButtonComponent implements OnInit {
  @Input() text: string;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
