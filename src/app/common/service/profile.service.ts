import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Profile } from '../model/profile';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private readonly _keycloak: KeycloakService) { }

  getProfile = (): Profile => {
    let idToken = this._keycloak.getKeycloakInstance().idTokenParsed!
    return {
      givenName: idToken['given_name'],
      email: idToken['email'],
      emailVerified: idToken['email_verified'],
      familyName: idToken['family_name'],
      preferredUsername: idToken['preferred_username']
    }
  }
}
