import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ALL_TAIGA_UI_MODULES } from '../tui/all-taiga-modules';
import { ChannelRoutingModule } from './channel-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChannelRoutingModule,
    HttpClientModule,
    ALL_TAIGA_UI_MODULES,
  ],
})
export class ChannelModule {}
