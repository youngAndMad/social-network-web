import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from 'src/app/common/guard/kc-auth.guard';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserSearchInputComponent } from './components/user-search-input/user-search-input.component';

const routes: Routes = [
  {
    path: 'user/profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/search',
    component: UserSearchInputComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
