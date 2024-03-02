import { IsExists } from './../models/dto/is-exists.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../models/user';
import { UserSearchCriteria } from '../models/dto/user-search-criteria';
import { RegistrationDto } from '../models/dto/registration-dto';
import { UserSuggestionDto } from '../models/dto/user-suggestion.dto';
import { UserResponseDto } from '../models/dto/user-response.dto';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly _http: HttpClient) {}

  me = (): Observable<UserResponseDto> => {
    return this._http.get<UserResponseDto>('/api/v1/user/me').pipe(
      tap((user) => {
        localStorage.setItem('user-response', JSON.stringify(user));
        console.log('current user', user);
      })
    );
  };

  delete = (id: number): Observable<any> =>
    this._http.delete(`/api/v1/user/${id}`);

  fetchSuggestions = (query: string): Observable<UserSuggestionDto[]> =>
    this._http.get<UserSuggestionDto[]>('/api/v1/user/suggest', {
      params: { query },
    });

  search = (
    criteria: UserSearchCriteria,
    page: number,
    pageSize: number
  ): Observable<UserSuggestionDto[]> =>
    this._http.post<UserSuggestionDto[]>('/api/v1/user/search', criteria, {
      params: { page, pageSize },
    });

  uploadAvatar = (file: File, id: number): Observable<any> => {
    let form = new FormData();
    form.append('file', file);
    return this._http.patch(`/api/v1/user/${id}/avatar`, form);
  };

  register = (req: RegistrationDto): Observable<User> =>
    this._http.post<User>('/api/v1/user', req);

  isExists = (email: string): Observable<IsExists> =>
    this._http.get<IsExists>('/api/v1/user/is-exists', { params: { email } });

  update = (req: any, id: number): Observable<any> =>
    this._http.put(`/api/v1/user/${id}`, req);

  deleteAvatar = (id: number) => this._http.delete(`/api/v1/user/${id}/avatar`);

  getUser = (id: number): Observable<User> =>
    this._http.get<User>(`/api/v1/user/${id}`);
}
