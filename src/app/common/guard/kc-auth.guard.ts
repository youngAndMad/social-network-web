import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor() {}

  async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    // if (!this.authenticated) {
    //   await this.keycloak.login({
    //     redirectUri: window.location.origin + state.url,
    //   });
    // }
    // const idTokenParsed = this.keycloak.getKeycloakInstance().idTokenParsed!;
    // const email = idTokenParsed['email'];

    // this.userService.isExists(email).subscribe((res) => {
    //   if (res.exists === false) {
    //     this.router.navigate(['/user/profile']).then();
    //   }
    // });

    // return this.authenticated;
    return true;
  }
}
