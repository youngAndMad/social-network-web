import { Injectable } from '@angular/core';
declare var SockJS;
declare var Stomp;
import { EnvService } from './env.service';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient;

  constructor(
    private readonly _envService: EnvService,
    private readonly _keycloak: KeycloakService
  ) {
  }

  connect() {
    const ws = new SockJS(this._envService.websocketUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect(this.authHeader(), (fr) => {
      console.log('successfully ws connection', fr)
      this.send({}, '/start_session')
    })
  }

  send(message: any = {}, destination: string) {
    this.stompClient.send(destination, this.authHeader(), message)
  }

  private authHeader() {
    return {
      'X-Authorization': this._keycloak.getKeycloakInstance().token
    }
  }

  subscribe = (
    channel: string,
    callback: (event: any) => void,
    onError: (err: any) => void
  ) => {
    this.stompClient.subscribe(channel, callback, onError);
  }
}
