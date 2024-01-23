import { Injectable, OnDestroy } from '@angular/core';
declare var SockJS;
declare var Stomp;
import { EnvService } from './env.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService{
  private stompClient;

  constructor(
    private _envService: EnvService,
    private _profileService: ProfileService
  ) {
  }

  connect() {
    const ws = new SockJS(this._envService.websocketUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, (fr) => {
      console.log('successfully ws connection', fr)
      this.send({},'/start_session')
    })
  }

  send(message: any = {}, destination: string) {
    this.stompClient.send(destination, this.profileHeader(), message)
  }

  private profileHeader() {
    return {
      'profile': JSON.stringify(this._profileService.getProfile())
    }
  }
}