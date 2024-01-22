import { EnvService } from './../service/env.service';
import {KeycloakService} from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService,
  envService: EnvService
) {
  return () =>
    keycloak.init({
      config: {
        url: envService.kcIssuerUrl + '/auth',
        realm: envService.kcRealm,
        clientId: envService.kcClientId,
      },
      initOptions: {
        redirectUri:  envService.kcRedirectUrl,
        checkLoginIframe: false,
      },
      bearerPrefix: 'Bearer ',
      loadUserProfileAtStartUp: true
    });
}