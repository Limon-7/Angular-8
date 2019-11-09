import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms' ;
import { from } from 'rxjs';
import { SignupValidator } from './singup.validator';

@Component({
  selector: 'app-singnup-form',
  templateUrl: './singnup-form.component.html',
  styleUrls: ['./singnup-form.component.css']
})
export class SingnupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
      SignupValidator.cannotContainSpace,
      SignupValidator.shouldBeUnique
    ]),
    password: new FormControl('', Validators.required)
  });
  get username() {
    return this.form.get('username');
  }
}
