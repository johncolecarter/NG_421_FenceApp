import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  passMatch = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      inputEmail: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      inputFirstName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      inputLastName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      inputPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(7)
      ])],
      inputConfirmPassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(7)
      ])]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.registerForm.value.inputPassword === this.registerForm.value.inputConfirmPassword) {
      this.router.navigate(['/userprofile']);
    }
    this.passMatch = false;
  }

}
