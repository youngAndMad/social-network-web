import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Page } from 'src/app/common/model/page';
import { News } from '../../models/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  length = 64;
  index = 10;

  newsPage: Page<News>
  defaultPage = 0
  defaultPageSize = 10

  constructor(private readonly _newsService: NewsService) { }

  ngOnInit(): void {
    this._newsService.paginate(this.defaultPage, this.defaultPageSize)
      .subscribe(res => {
        this.newsPage = res
        this.length = res.totalPages
      })
  }

  goToPage(index: number) {
    this.index = index;
    console.info('New page:', index);
  }
}
