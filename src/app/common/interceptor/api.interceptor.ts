import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnvService } from '../service/env.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private readonly _envService: EnvService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('api')) {
      const modifiedReq = request.clone({
        url: this._envService.apiUrl + request.url
      })
      return next.handle(modifiedReq);
    }
    return next.handle(request)
  }
}
