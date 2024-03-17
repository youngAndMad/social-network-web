import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '@chat/services/chat.service';

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

  constructor(
    private readonly _actRoute: ActivatedRoute,
    private readonly _chatService: ChatService,
    private readonly _fb: FormBuilder,
    private readonly _http: HttpClient
  ) {
    this.messageForm = this._fb.group({
      value: [''],
    });
  }

  ngOnInit(): void {
    this._http
      .get('/api/v1/qr/generate?link=https://t.me/youngAndMad', {
        responseType: 'blob',
      })
      .subscribe(console.log);
    this._actRoute.queryParamMap.subscribe(console.log);
    // this._chatService.myChats().subscribe((chats) => {
    //   console.log(
    //     '🚀 ~ ChatComponent ~ this._chatService.myChats ~ chats:',
    //     chats
    //   );
    //   this.chats = chats;
    // });
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
