import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable } from 'rxjs';
import { UserSuggestionDto } from '../../models/dto/user-suggestion.dto';
import { UserService } from '../../services/user.service';
import { FileService } from 'src/app/features/file/services/file.service';

@Component({
  selector: 'sp-user-search-input',
  templateUrl: './user-search-input.component.html',
  styleUrls: ['./user-search-input.component.scss'],
})
export class UserSearchInputComponent implements OnInit {
  userSearchForm: FormGroup;
  userSuggestions$: Observable<UserSuggestionDto[]>;

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

  fetchSuggestions() {
    this.userSearchForm
      .get('query')
      ?.valueChanges.pipe(
        debounceTime(750),
        distinctUntilChanged(),
        filter((val: string) => val?.length >= 2)
      )
      .subscribe((query) => {
        this.userSuggestions$ = this._userService.fetchSuggestions(query);
        this._cdr.detectChanges();
      });
  }

  imageLink = (url: string) => this._fileService.generateDownloadUrl(url);
}
