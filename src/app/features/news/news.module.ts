import { ALL_TAIGA_UI_MODULES } from '../tui/all-taiga-modules';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsCardComponent } from './components/news-card/news-card.component';

@NgModule({
  declarations: [CreateNewsComponent, NewsListComponent, NewsCardComponent],
  imports: [
    CommonModule,
    UiModule,
    NewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ALL_TAIGA_UI_MODULES,
  ],
})
export class NewsModule {}
