import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { TuiModule } from '../tui/tui.module';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    TuiModule
  ]
})
export class ChatModule { }
