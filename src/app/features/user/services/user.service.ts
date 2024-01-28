import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserSearchCriteria } from '../models/dto/user-search-criteria';
import { RegistrationDto } from '../models/dto/registration-dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly _http: HttpClient) {}

  delete = (id: number): Observable<any> =>
    this._http.delete(`/api/v1/user/${id}`);

  fetchSuggestions = (query: string): Observable<User[]> =>
    this._http.get<User[]>('/api/v1/user/suggest', { params: { query } });

  search = (
    criteria: UserSearchCriteria,
    page: number,
    pageSize: number
  ): Observable<User[]> =>
    this._http.post<User[]>('/api/v1/user/search', criteria, {
      params: { page, pageSize },
    });

  uploadAvatar = (file: File, id: number): Observable<any> => {
    let form = new FormData();
    form.append('file', file);
    return this._http.patch(`/api/v1/user/${id}/avatar`, form);
  };

  register = (req: RegistrationDto): Observable<User> =>
    this._http.post<User>('/api/v1/user/register', req);
}
