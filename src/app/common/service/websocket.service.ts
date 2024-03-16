import { Injectable, OnDestroy } from '@angular/core';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { StompSubscription } from '@stomp/stompjs/src/stomp-subscription';
import { KeycloakService } from 'keycloak-angular';
import { EnvService } from './env.service';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService implements OnDestroy {
  private connection: CompatClient | undefined = undefined;
  private subscriptions: StompSubscription[] = [];

  constructor(
    private readonly _envService: EnvService,
    private readonly _keycloak: KeycloakService
  ) {
    this.connection = Stomp.client(this._envService.websocketUrl);
    this.connection.connect(this.authHeader(), () => {});
  }

  send(message: any = {}, destination: string) {
    if (this.connection && this.connection.connected) {
      this.connection.send(
        destination,
        this.authHeader(),
        JSON.stringify(message)
      );
    } else {
      console.log('error during ws send. Connection does not established');
    }
  }

  private authHeader() {
    return {
      'X-Authorization': this._keycloak.getKeycloakInstance().token,
    };
  }

  subscribe = (channel: string, callback: (event: any) => void) => {
    this.connection?.subscribe(channel, callback);
  };

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
