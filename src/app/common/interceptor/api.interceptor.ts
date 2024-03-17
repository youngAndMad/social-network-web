import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from '../service/env.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private readonly _envService: EnvService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('api')) {
      const modifiedReq = request.clone({
        url: this._envService.apiUrl + request.url,
        withCredentials: false,
      });
      return next.handle(modifiedReq);
    }
    return next.handle(request);
  }
}
