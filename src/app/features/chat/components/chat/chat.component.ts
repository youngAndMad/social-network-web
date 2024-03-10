import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sp-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chats: any[] = [];
  chat: any = {};
  currentChat: any = {};
  user: any = {};
  messageForm: FormGroup;

  constructor(private readonly _actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._actRoute.queryParamMap.subscribe(console.log);
  }

  onSelectChat(chat: any) {}

  imageLink(v: any): string {
    return '';
  }

  getSecondMember(chat: any): any {
    return {};
  }

  getLastMessage(chat: any): any {
    return {};
  }

  isUserOnline(user: any): boolean {
    return false;
  }

  sendMessage() {}
}
