import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { AuthGuard } from 'src/app/common/guard/kc-auth.guard';
import {CreateChannelComponent} from "./components/create-channel/create-channel.component";

const routes: Routes = [
  {
    path: 'my/channels',
    component: ChannelListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'channel/create',
    component: CreateChannelComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelRoutingModule {}
