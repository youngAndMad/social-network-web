import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private readonly _http: HttpClient) {}

  createPrivateChat(receiverEmail: string) {
    return this._http.post<Chat>('/api/v1/chat/private-chat', {
      receiverEmail,
    });
  }
}
