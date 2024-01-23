import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TuiModule } from '../tui/tui.module';
import { NewsListComponent } from './components/news-list/news-list.component';

@NgModule({
  declarations: [
    CreateNewsComponent,
    NewsListComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TuiModule
  ]
})
export class NewsModule { }
