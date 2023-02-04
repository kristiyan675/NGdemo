import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { emailValidation } from '../login/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl(null, [Validators.required, emailValidation]),
    passwords: new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      rePassword: new FormControl(),
    }),
    tel: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  handleSubmit() {}
}
