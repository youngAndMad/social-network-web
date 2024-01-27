import { Injectable  } from '@angular/core';
declare var SockJS;
declare var Stomp;
import { EnvService } from './env.service';
import { KeycloakService } from 'keycloak-angular';
import { UserStatusService } from 'src/app/features/chat/services/user-status.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private stompClient;

  constructor(
    private readonly _envService: EnvService,
    private readonly _keycloak: KeycloakService,
    private readonly _userStatusService: UserStatusService
  ) {
  }

  connect() {
    const ws = new SockJS(this._envService.websocketUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect(this.authHeader(), (fr) => {
      console.log('successfully ws connection', fr)
      this._userStatusService.startSession().subscribe(res => {
        console.log('start user status result' , res)
      })
    })
  }

  send(message: any = {}, destination: string) {
    this.stompClient.send(destination, this.authHeader(), JSON.stringify(message))
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
