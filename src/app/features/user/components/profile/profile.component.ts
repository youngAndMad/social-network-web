import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';
import { TUI_PROMPT, TuiPromptData } from '@taiga-ui/kit';
import { switchMap } from 'rxjs/operators';
import { FileService } from 'src/app/features/file/services/file.service';

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

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userService: UserService,
    private readonly _fileService: FileService,

    private readonly _toast: ToastrService,
    @Inject(TuiDialogService) private readonly _dialogs: TuiDialogService,
    @Inject(TuiAlertService) private readonly _alerts: TuiAlertService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._userService.me().subscribe((user) => {
      this.user = user;
      this.initializeForm();
      this._cdr.detectChanges();
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

  imageLink = (url: string) => this._fileService.generateDownloadUrl(url);

  submitForm() {
    this._userService
      .update(this.userForm.value, this.user.id)
      .subscribe((res) => {
        this._toast.success('Profile updated successfulyy', '');
      });
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

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this._userService.uploadAvatar(file, this.user.id).subscribe(() => {
        this._toast.success('Profile updated successfully', '', {
          timeOut: 2000,
        });
      });
    }
  }
}
