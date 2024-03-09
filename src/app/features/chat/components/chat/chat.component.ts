import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sp-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  constructor(private readonly _actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._actRoute.queryParamMap.subscribe(console.log);
  }
}
