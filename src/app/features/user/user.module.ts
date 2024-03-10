import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiModule } from '@ui/ui.module';
import { ToastrModule } from 'ngx-toastr';
import { ALL_TAIGA_UI_MODULES } from '../tui/all-taiga-modules';
import { ProfileComponent } from './components/profile/profile.component';
import { UserSearchInputComponent } from './components/user-search-input/user-search-input.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { VisitProfileComponent } from './components/visit-profile/visit-profile.component';
import { UserEffects } from './store/user.effects';
import { userReducer } from './store/user.reducer';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    ProfileComponent,
    UserSearchComponent,
    UserSearchInputComponent,
    VisitProfileComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    UserRoutingModule,
    UiModule,
    ALL_TAIGA_UI_MODULES,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ user: userReducer }), // Add userReducer to the global store
    EffectsModule.forRoot([UserEffects]), // Register UserEffects
    ToastrModule.forRoot({
      maxOpened: 5,
    }),
  ],
  exports: [UserSearchInputComponent],
})
export class UserModule {}
