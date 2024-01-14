import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IsExistsResponse } from '../model/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly _http: HttpClient) { }

  isRegistered = (email:string) :Observable<IsExistsResponse> => {
    return this._http.get<IsExistsResponse>('/user/is-exists',{params: {email}})
  }

}

