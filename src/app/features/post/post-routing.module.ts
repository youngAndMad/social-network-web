import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';

const routes: Routes = [
  {
    path: 'my/posts',
    component: MyPostsComponent,
  },
  {
    path: 'post/publish',
    component: CreatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
