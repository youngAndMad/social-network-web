import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { TuiModule } from '../tui/tui.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UiModule,
    TuiModule
  ]
})
export class UserModule { }
