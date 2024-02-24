import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelRoutingModule } from './channel-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateChannelComponent } from './components/create-channel/create-channel.component';

@NgModule({
  declarations: [
    CreateChannelComponent
  ],
  imports: [CommonModule, ChannelRoutingModule, HttpClientModule],
})
export class ChannelModule {}
