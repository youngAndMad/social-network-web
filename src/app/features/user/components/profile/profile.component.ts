import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { TUI_PROMPT, TuiPromptData } from '@taiga-ui/kit';
import { switchMap } from 'rxjs/operators';

import { ProfileService } from 'src/app/common/service/profile.service';

@Component({
  selector: 'sp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  genders = ['MALE', 'FEMALE'];
  user: User;

  isLoaded: boolean = false;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userService: UserService,
    private readonly _toast: ToastrService,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _profileService: ProfileService,
    @Inject(TuiDialogService) private readonly _dialogs: TuiDialogService,
    @Inject(TuiAlertService) private readonly _alerts: TuiAlertService
  ) {}

  ngOnInit(): void {
    this._activateRoute.queryParams.subscribe((params) => {
      const isRegistered = params['isRegistered'];
      console.log(isRegistered);
      console.log(params);

      // if (false === isRegistered) {
      //   const profile = this._profileService.getProfile();
      //   this.userForm = this._fb.group({
      //     birthDate: [],
      //     preferredUsername: [profile?.preferredUsername],
      //     givenName: [profile?.givenName],
      //     familyName: [profile?.familyName],
      //     email: [profile?.email],
      //     gender: [],
      //     address: this._fb.group({
      //       country: [],
      //       city: [],
      //     }),
      //   });
      // } else {
      this._userService.me().subscribe((user) => {
        this.user = user;
        this.isLoaded = true;
        console.log(this.user);
        this.initializeForm();
      });
    });
  }
  //   }
  //   this.isLoaded = true;
  // });

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

  onDeleteAccountAttempt(): void {
    console.log('onDeleteAccountAttempt');
    const data: TuiPromptData = {
      content:
        'This is <code>PolymorpheusContent</code> so it can be template too!',
      yes: 'That is great!',
      no: 'Who cares?',
    };

    this._dialogs
      .open<boolean>(TUI_PROMPT, {
        label: 'Do you like Taiga UI?',
        size: 's',
        data,
      })
      .pipe(switchMap((response) => this._alerts.open(String(response))))
      .subscribe((res) => console.log('res', res));
  }
}
