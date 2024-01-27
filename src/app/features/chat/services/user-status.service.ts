import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  constructor(private readonly _http: HttpClient) { }

  startSession = () : Observable<any> =>{
    return this._http.post('/api/v1/chat-service/ws/start-session' , {})
  }

  closeSession = () : Observable<any> =>{
    return this._http.post('/api/v1/chat-service/ws/close-session' , {})
  }
  
}
