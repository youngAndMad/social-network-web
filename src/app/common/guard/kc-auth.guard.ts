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
    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url,
      });
    }
    const idTokenParsed = this.keycloak.getKeycloakInstance().idTokenParsed!;
    const email = idTokenParsed['email'];

    this.userService.isExists(email).subscribe((res) => {
      if (res.exists === false) {
        this.router.navigate(['/user/profile']).then();
      }
    });

    return this.authenticated;
  }
}
