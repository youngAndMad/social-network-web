import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RelationService {
  constructor(private readonly _http: HttpClient) {}

  deleteBlock(id: number): Observable<any> {
    return this._http.delete(`/api/v1/user/relation/block/${id}`);
  }

  deleteSubscription(id: number): Observable<any> {
    return this._http.delete(`/api/v1/user/relation/subscription/${id}`);
  }

  deleteFriendship(id: number, by: number): Observable<any> {
    return this._http.delete(`/api/v1/user/relation/friendship/${id}/by/${by}`);
  }

  blockUser(sender: number, receiver: number): Observable<any> {
    return this._http.post(
      `/api/v1/user/relation/block`,
      {},
      { params: { sender, receiver } }
    );
  }

  subscribeUser(sender: number, receiver: number): Observable<any> {
    return this._http.post(
      `/api/v1/user/relation/subscription`,
      {},
      { params: { sender, receiver } }
    );
  }

  addFriendship(sender: number, receiver: number): Observable<any> {
    return this._http.post(
      `/api/v1/user/relation/friendship`,
      {},
      { params: { sender, receiver } }
    );
  }

  userRelations(userId: number): Observable<any> {
    return this._http.get(`/api/v1/user/relations`, { params: { userId } });
  }
}
