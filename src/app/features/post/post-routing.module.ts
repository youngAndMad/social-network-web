import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/common/guard/kc-auth.guard';
import { MyPostsComponent } from './components/my-posts/my-posts.component';

const routes: Routes = [
  {
    path: 'my/posts',
    component: MyPostsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
