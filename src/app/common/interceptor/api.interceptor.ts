import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvService } from '../service/env.service';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private readonly _envService: EnvService,
    private readonly _keycloak: KeycloakService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this._keycloak.getKeycloakInstance().token;

    if (request.url.includes('api')) {
      const modifiedReq = request.clone({
        url: this._envService.apiUrl + request.url,
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
      return next.handle(modifiedReq);
    }
    return next.handle(request)
  }
}
