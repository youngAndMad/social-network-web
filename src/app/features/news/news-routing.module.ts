import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewsListComponent } from './components/news-list/news-list.component';

const routes: Routes = [
  {
    path: 'news/create', component: CreateNewsComponent
  },
  {
    path: 'news' , component: NewsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
