import { Injectable } from '@angular/core';
import { IEnvironment } from 'src/environments/environment.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvService implements IEnvironment {

  get apiUrl() {
    return environment.apiUrl
  }

  get websocketUrl() {
    return environment.websocketUrl
  }

  get kcClientId() {
    return environment.kcClientId
  }

  get kcIssuerUrl() {
    return environment.kcIssuerUrl
  }

  get kcRealm() {
    return environment.kcRealm
  }

  get kcRedirectUrl() {
    return environment.kcRedirectUrl
  }
}
