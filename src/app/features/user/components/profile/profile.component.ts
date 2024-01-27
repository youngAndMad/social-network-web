import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  genders = ['MALE', 'FEMALE'];

  constructor(private readonly _fb: FormBuilder) {
    this.userForm = this._fb.group({
      birthDate: [],
      preferredUsername: [],
      givenName: [],
      familyName: [],
      email: [],
      gender: [],
      address: this._fb.group({
        country: [],
        city: [],
      }),
    });
  }

  ngOnInit(): void {}
}
