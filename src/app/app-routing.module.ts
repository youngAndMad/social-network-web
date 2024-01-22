import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guard/kc-auth.guard';
import { HomeComponent } from './shared/layout/home/home.component';

const routes: Routes = [
  {
    canActivate: [AuthGuard], path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
