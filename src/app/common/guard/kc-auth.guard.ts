import { UserService } from './../../features/user/services/user.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard extends KeycloakAuthGuard {
  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService,
    protected readonly userService: UserService
  ) {
    super(router, keycloak);
  }

  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    console.log(this.keycloak.getKeycloakInstance().idTokenParsed!);
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }
    const idTokenParsed = this.keycloak.getKeycloakInstance().idTokenParsed!;
    const email = idTokenParsed['email'];
    const givenName = idTokenParsed['given_name'];
    const familyName = idTokenParsed['family_name'];
    const preferredUsername = idTokenParsed['preferred_username'];
    this.userService.isExists(email).subscribe((res) => {
      if (res.isExists === true) {
        this.userService
          .register({
            givenName,
            familyName,
            preferredUsername,
            email,
          })
          .subscribe((res) => console.log(res)); //todo redirect to user profile page
      }
    });

    return this.authenticated;
  }
}
