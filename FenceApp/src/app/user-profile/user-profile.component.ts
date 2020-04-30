import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userProfileForm = this.formBuilder.group({
      inputFirstName: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2)
      ])]
    });
  }

  ngOnInit(): void {
  }

}
