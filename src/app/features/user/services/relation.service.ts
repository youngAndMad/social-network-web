import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RelationService {
  constructor(private readonly _http: HttpClient) {}

  sendFriendRequest = (sender: number, receiver: number): Observable<any> =>
    this._http.post(
      '/api/v1/user/relation/subscription',
      {},
      { params: { sender, receiver } }
    );
}
