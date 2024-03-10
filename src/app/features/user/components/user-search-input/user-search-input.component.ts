import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileService } from '@file/services/file.service';
import { UserSuggestionDto } from '@user/models/dto/user-suggestion.dto';
import { UserService } from '@user/services/user.service';
import { BehaviorSubject, distinctUntilChanged, of, switchMap } from 'rxjs';

@Component({
  selector: 'sp-user-search-input',
  templateUrl: './user-search-input.component.html',
  styleUrls: ['./user-search-input.component.scss'],
})
export class UserSearchInputComponent implements OnInit {
  userSearchForm: FormGroup;
  userSuggestions$: BehaviorSubject<UserSuggestionDto[]> = new BehaviorSubject<
    UserSuggestionDto[]
  >([]);

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userService: UserService,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _fileService: FileService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.userSearchForm = this._fb.group({
      query: [],
    });
    this.fetchSuggestions();
  }

  stringify(suggestion: UserSuggestionDto) {
    return suggestion.preferredUsername;
  }

  fetchSuggestions() {
    this.userSearchForm
      .get('query')
      ?.valueChanges.pipe(
        distinctUntilChanged(),
        switchMap((val: string) => {
          console.log(val);
          if (val?.length >= 2) {
            return this._userService.fetchSuggestions(val);
          } else {
            return of([]); // Return an empty array or null when query length is less than 2
          }
        })
      )
      .subscribe((suggestions) => {
        console.log(suggestions);
        this.userSuggestions$.next(suggestions);
        this._cdr.detectChanges();
      });
  }

  imageLink = (url: string) => this._fileService.generateDownloadUrl(url);

  navigateToVisitPage(suggestion: UserSuggestionDto) {
    this.userSearchForm.reset();

    this._router.navigate(['/user/visit/', suggestion.id]);
  }
}
