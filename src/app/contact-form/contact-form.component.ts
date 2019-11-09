import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethod: any = [
    {
      id: 1,
      name: 'Email'
    },
    {
      id: 2,
      name: 'Facebook'
    },
    {
      id: 3,
      name: 'Twitter'
    },
  ];
  gender: any = [
    {
      id: 1,
      name: 'Male'
    },
    {
      id: 2,
      name: 'Female'
    },
    {
      id: 3,
      name: 'Other'
    },
  ];
  log(x) { console.log(x); }
  onSubmit(f) {
    console.log(f);
  }

}
