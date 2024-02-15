import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from 'src/app/common/model/profile';
import { ProfileService } from 'src/app/common/service/profile.service';
import { UserService } from '../../services/user.service';

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
    private readonly _profileService: ProfileService,
    private readonly _userService: UserService
  ) {}

  ngOnInit(): void {
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

    this._userService.me().subscribe(console.log);
  }

  submitForm() {
    console.log(this.userForm.value);
    this._userService.register(this.userForm.value).subscribe(console.log);
  }
}
