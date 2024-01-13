import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  baseUrl:string = "http://localhost:8080/" // todo get from environment
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedReq = request.clone({
        url: this.baseUrl + request.url
      }
    )
    return next.handle(modifiedReq);
  }
}
