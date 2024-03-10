import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, catchError, of } from 'rxjs';
import { FileService } from 'src/app/features/file/services/file.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import * as UserStore from '../../store';

@Component({
  selector: 'sp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  genders = ['MALE', 'FEMALE'];
  user: User;
  modalSubscription: Subscription;
  open = false;
  index = 0;

  private user$: Observable<User | null>;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userService: UserService,
    private readonly _fileService: FileService,

    private readonly _toast: ToastrService,
    @Inject(TuiDialogService) private readonly _dialogs: TuiDialogService,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _router: Router,
    private readonly _store: Store
  ) {
    this.user$ = this._store.select(UserStore.selectUser);
  }

  ngOnInit(): void {
    this._userService.me().subscribe((userResponseDto) => {
      this.user = userResponseDto.user;
      this.initializeForm();
      this._cdr.detectChanges();
    });

    this._store.dispatch(UserStore.loadUser());
  }

  onClick(): void {
    this.open = false;
    this.index = 1;
    this._cdr.detectChanges();
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
      .pipe(
        catchError((error) => {
          this._toast.error(error.message);
          return of();
        })
      )
      .subscribe(() => {
        this._toast.success('Profile updated successfully');
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

  deleteAccount() {
    this._userService.delete(this.user.id).subscribe(() => {
      this.closeDialog();
      localStorage.clear();
      this._router.navigate(['/news']);
    });
  }

  closeDialog = () => this.modalSubscription.unsubscribe();

  deleteAvatar = () => {
    this._userService.deleteAvatar(this.user.id).subscribe(console.log);
  };

  onFileSelected(event: any) {
    console.log('onFileSelected', event);

    const file = event.target.files[0];
    console.log('file selected', file.name);

    if (file) {
      console.log('file selected', file.name);
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
