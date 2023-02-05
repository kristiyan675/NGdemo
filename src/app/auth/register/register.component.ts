import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { emailValidation, passwordMatch } from '../login/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  passwordControl = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);

  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl(null, [Validators.required, emailValidation]),
    passwords: new FormGroup({
      password: this.passwordControl,
      rePassword: new FormControl(null, [passwordMatch(this.passwordControl)]),
    }),
    tel: new FormControl(''),
  });

  handleSubmit() {
    const { username, email, passwords, tel, telRegion } =
      this.registerFormGroup.value;

    let body = {
      username: username,
      email: email,
      password: passwords.password,
      tel: tel ? tel + telRegion : null,
    };

    this.userService
      .register(body)
      .subscribe((res) => this.router.navigate(['/home']));
  }
}
