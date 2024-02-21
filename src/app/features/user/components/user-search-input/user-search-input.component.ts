import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, distinctUntilChanged, of, switchMap } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { UserSuggestionDto } from '../../models/dto/user-suggestion.dto';
import { UserService } from '../../services/user.service';
import { FileService } from 'src/app/features/file/services/file.service';

@Component({
  selector: 'sp-user-search-input',
  templateUrl: './user-search-input.component.html',
  styleUrls: ['./user-search-input.component.scss'],
  animations: [
    trigger('dropdownAnimation', [
      state(
        'hidden',
        style({
          height: '0',
          opacity: '0',
          overflow: 'hidden',
          zIndex: '-1',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
          opacity: '1',
          overflow: 'visible',
          zIndex: '10000',
        })
      ),
      transition('hidden => visible', animate('300ms ease-in')),
      transition('visible => hidden', animate('300ms ease-out')),
    ]),
  ],
})
export class UserSearchInputComponent implements OnInit {
  userSearchForm: FormGroup;
  userSuggestions$: BehaviorSubject<UserSuggestionDto[]> = new BehaviorSubject<
    UserSuggestionDto[]
  >([]);
  dropdownState: 'hidden' | 'visible' = 'hidden';

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userService: UserService,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _fileService: FileService
  ) {}

  ngOnInit(): void {
    this.userSearchForm = this._fb.group({
      query: [],
    });
    this.fetchSuggestions();
  }

  toggleDropdown = () =>
    (this.dropdownState =
      this.dropdownState === 'hidden' ? 'visible' : 'hidden');

  fetchSuggestions() {
    this.userSearchForm
      .get('query')
      ?.valueChanges.pipe(
        distinctUntilChanged(),
        switchMap((val: string) => {
          if (val?.length >= 2) {
            return this._userService.fetchSuggestions(val);
          } else {
            return of([]); // Return an empty array or null when query length is less than 2
          }
        })
      )
      .subscribe((suggestions) => {
        this.userSuggestions$.next(suggestions);
        this._cdr.detectChanges();
      });
  }

  imageLink = (url: string) => this._fileService.generateDownloadUrl(url);
}
