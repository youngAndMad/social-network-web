import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiModule } from '../tui/tui.module';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostRoutingModule } from './post-routing.module';
import { CreatePostComponent } from './components/create-post/create-post.component';

@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    TuiModule,
    UiModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
})
export class PostModule {}
