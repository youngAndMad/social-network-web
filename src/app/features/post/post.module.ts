import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { TuiModule } from '../tui/tui.module';

import { ALL_TAIGA_UI_MODULES } from '../tui/all-taiga-modules';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [CreatePostComponent, MyPostsComponent],
  imports: [
    CommonModule,
    ALL_TAIGA_UI_MODULES,
    PostRoutingModule,
    TuiModule,
    UiModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
})
export class PostModule {}
