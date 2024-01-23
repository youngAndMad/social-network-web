import { WebsocketService } from './../../../common/service/websocket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private ws: WebsocketService) { 
    this.ws.connect()
  }


  ngOnInit(): void {
  }
}