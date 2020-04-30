import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  isValid = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
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
    if (this.loginForm.value.inputEmail === 'test@gmail.com' && this.loginForm.value.inputPassword === 'test123') {
      this.router.navigate(['/userprofile']);
    }
    this.isValid = false;
  }

}
