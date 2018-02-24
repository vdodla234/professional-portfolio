import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  textareaContent = "Your Message";
  forms = [
    {
      label : "name",
      labelContent : "Your Name",
      type : "text",
    },
    {
      label : "email",
      labelContent : "Your Email",
      type : "email",
    },
    {
      label : "number",
      labelContent : "Your Mobile",
      type : "text",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
