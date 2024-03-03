import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from 'src/app/common/guard/kc-auth.guard';
import { UserSearchInputComponent } from './components/user-search-input/user-search-input.component';
import { VisitProfileComponent } from './components/visit-profile/visit-profile.component';

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
  {
    path: 'user/visit/:id',
    component: VisitProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
