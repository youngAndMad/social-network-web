import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { TuiModule } from '../tui/tui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    BrowserModule,
    UserRoutingModule,
    UiModule,
    TuiModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
