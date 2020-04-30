import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = this.formBuilder.group({
      inputEmail: ['', Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      inputPassword: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(30),
        Validators.minLength(7)
      ])]
    });
  }

  ngOnInit(): void {
  }

}
