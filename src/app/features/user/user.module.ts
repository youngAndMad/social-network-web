import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { ALL_TAIGA_UI_MODULES } from '../tui/Fall-taiga-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserSearchInputComponent } from './components/user-search-input/user-search-input.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UserSearchComponent,
    UserSearchInputComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UserRoutingModule,
    UiModule,
    ALL_TAIGA_UI_MODULES,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      maxOpened: 5,
    }),
  ],
})
export class UserModule {}
