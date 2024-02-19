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
import {
  TuiAlertService,
  TuiDialogService,
  TuiDialogContext,
} from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { FileService } from 'src/app/features/file/services/file.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  modalSubscription: Subscription;
  open = false;
  index = 0;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userService: UserService,
    private readonly _fileService: FileService,

    private readonly _toast: ToastrService,
    @Inject(TuiDialogService) private readonly _dialogs: TuiDialogService,
    @Inject(TuiAlertService) private readonly _alerts: TuiAlertService,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._userService.me().subscribe((user) => {
      this.user = user;
      this.initializeForm();
      this._cdr.detectChanges();
    });
  }

  onClick(): void {
    this.open = false;
    this.index = 1;
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

  showDialog(
    content: PolymorpheusContent<TuiDialogContext>,
    label: string
  ): void {
    this.modalSubscription = this._dialogs
      .open(content, { label: label })
      .subscribe();
  }

  closeDialog = () => this.modalSubscription.unsubscribe();

  deleteAccount = () => {
    this._userService.delete(this.user.id).subscribe(() => {
      this.closeDialog();
      localStorage.clear();
      this._router.navigate(['/news']);
    });
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this._userService.uploadAvatar(file, this.user.id).subscribe(() => {
        this._toast.success('Profile updated successfully', '', {
          timeOut: 2000,
        });
        this._cdr.detectChanges();
      });
    } else {
      this._toast.error('Image does not selected');
    }
  }
}
