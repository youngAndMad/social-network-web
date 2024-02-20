import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'sp-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})
export class UserSearchComponent {
  constructor(
    private readonly _fb: FormBuilder,
    private readonly _userService: UserService
  ) {}
}
