import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  genders = ['MALE', 'FEMALE'];
  user: User;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userService: UserService,
    private readonly _toast: ToastrService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this._userService.me().subscribe((user) => {
      this.user = user;
      this.initializeForm();
    });
  }

  initializeForm(): void {
    this.userForm = this._fb.group({
      birthDate: [this.user.birthDate],
      preferredUsername: [this.user?.preferredUsername],
      givenName: [this.user?.givenName],
      familyName: [this.user?.familyName],
      email: [this.user?.email],
      gender: [this.user?.gender],
      address: this._fb.group({
        country: [this.user?.address?.country],
        city: [this.user?.address?.city],
      }),
    });
  }

  submitForm() {
    if (this.user.id) {
      this._userService
        .update(this.userForm.value, this.user.id)
        .subscribe((res) => {
          console.log('register response', res);
          this._toast.success('Profile updated successfulyy', '');
        });
    } else {
      this._userService.register(this.userForm.value).subscribe((user) => {
        console.log('register response', user);
        this._toast.success('Profile updated successfulyy', '');
      });
    }
  }
}
