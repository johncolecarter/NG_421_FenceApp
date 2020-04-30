import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {

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

  submit() {
    this.router.navigate(['/userprofile']);
  }

}
