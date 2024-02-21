import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChannelType } from '../models/enums/channel-type';
import { Observable } from 'rxjs';
import { Channel } from '../models/channel';
import { AppUser } from 'src/app/common/model/appuser';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  constructor(private readonly _http: HttpClient) {}

  createChannel = (
    name: string,
    type: ChannelType,
    file?: File
  ): Observable<Channel> => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('type', type);

    if (file) {
      formData.append('file', file);
    }

    return this._http.post<Channel>('/api/v1/channel', formData);
  };

  myChannels(): Observable<Channel[]> {
    return this._http.get<Channel[]>('/api/v1/channel/my-channels');
  }

  addModerator(id: string, appUser: AppUser) {
    return this._http.post(`/api/v1/channel/${id}/moderator`, appUser);
  }

  removeModerator(id: string, email: string) {
    return this._http.delete(`/api/v1/channel/${id}/moderator`, {
      params: { email },
    });
  }
}
