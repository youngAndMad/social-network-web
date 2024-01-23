import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewsComponent } from './components/create-news/create-news.component';

const routes: Routes = [
  {
    path: 'news/create', component: CreateNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
