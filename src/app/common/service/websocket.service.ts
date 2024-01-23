import { Injectable, OnDestroy } from '@angular/core';
declare var SockJS;
declare var Stomp;
import { EnvService } from './env.service';




@Injectable({
  providedIn: 'root'
})
export class WebsocketService  {
  private stompClient;

  // private stompClient: Client;
  // private state: BehaviorSubject<SocketClientState>;


  constructor(private _envService: EnvService) {
  }

  connect(){
    const ws = new SockJS(this._envService.websocketUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, (fr) => {
      console.log('successfully ws connection', fr)
    })
  }
  
  // public connect(): Promise<void> {
  //   return new Promise<void>((resolve, reject) => {
  //     this.stompClient = new Client();

  //     this.stompClient.webSocketFactory = () => this.createSocket();

  //     this.stompClient.onConnect = (frame) => {
  //       console.log('WebSocket connected:', frame);
  //       resolve();
  //     };

  //     this.stompClient.onStompError = (frame) => {
  //       console.error('Error:', frame);
  //       reject('WebSocket connection error');
  //     };

  //     this.stompClient.activate();
  //   });
  // }

  // private createSocket(): IStompSocket {
  //   const socket = new SockJS(this._envService.websocketUrl);
  //   const stompSocket: IStompSocket = {
  //     url: socket.url,
  //     send: (body: string) => socket?.send(body),
  //     close: (code?: number, reason?: string) => socket?.close(code, reason),  
  //     onmessage: (event: IStompSocketMessageEvent) => this.handleMessageEvent(event), 
  //     onclose: (event: CloseEvent) => socket?.onclose?.(event),
  //     onerror: (event: Event) => socket?.onerror?.(event),
  //     onopen: (event: Event) => socket?.onopen?.(event),
  //     readyState: 1
  //   };
  
  //   return stompSocket;
  // }

  // private handleMessageEvent(event: IStompSocketMessageEvent): any {
  //   // Implement your logic here
  //   console.log('Handling message event:', event);
  //   return event;
  // }

  // public subscribe(destination: string, callback: (message: Message) => void): StompSubscription {
  //   return this.stompClient.subscribe(destination, callback);
  // }

  // public send(destination: string, body: string): void {
  //   this.stompClient.publish({ destination, body });
  // }

  // public disconnect(): void {
  //   if (this.stompClient && this.stompClient.connected) {
  //     this.stompClient.deactivate();
  //   }
  // }

  // ngOnDestroy(): void {
  //   this.disconnect()
  // }
}
