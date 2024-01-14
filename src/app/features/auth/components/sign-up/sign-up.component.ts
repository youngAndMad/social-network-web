import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Gender } from 'src/app/common/model/types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {

  registrationForm: FormGroup
  genders = ["MALE","FEMALE"]

  constructor(private readonly _fb: FormBuilder) {
    this.registrationForm = this._fb.group({
      firstName: [''], // todo read base fields from keycloak id token
      lastName: [''],
      email: [''],
      age: [null],
      gender:[Gender.MALE],
    })
  }
}
