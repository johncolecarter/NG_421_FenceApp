import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.userProfileForm = this.formBuilder.group({
      inputFirstName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      inputLastName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])],
      inputBirthday: ['', Validators.compose([
        Validators.required
      ])],
      inputAddress: ['', Validators.compose([
        Validators.required
      ])],
      inputFood: [''],
      inputMovie: [''],
      inputMusic: [''],
      inputHobbies: ['']
    });
  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.userProfileForm.value);
  }

  logout() {
    this.router.navigate(['/login']);
  }

}
