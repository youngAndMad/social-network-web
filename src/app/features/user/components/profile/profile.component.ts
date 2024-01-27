import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from 'src/app/common/model/profile';
import { ProfileService } from 'src/app/common/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  genders = ['MALE', 'FEMALE'];
  profile: Profile;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _profileService: ProfileService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.profile = this._profileService.getProfile();
    this.userForm = this._fb.group({
      birthDate: [],
      preferredUsername: [this.profile?.preferredUsername],
      givenName: [this.profile?.givenName],
      familyName: [this.profile?.familyName],
      email: [this.profile?.email],
      gender: [],
      address: this._fb.group({
        country: [],
        city: [],
      }),
    });
  }
}
