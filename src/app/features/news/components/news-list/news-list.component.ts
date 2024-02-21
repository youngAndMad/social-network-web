import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Page } from 'src/app/common/model/page';
import { News } from '../../models/news';

@Component({
  selector: 'sp-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  length = 0;
  newsPage: Page<News>;
  page = 0;
  defaultPageSize = 2; // todo increase to 10

  constructor(
    private readonly _newsService: NewsService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.refreshNewsPage(this.page);
  }

  goToPage(page: number) {
    this.refreshNewsPage(page);
  }

  refreshNewsPage = (page: number) => {
    this.page = page;

    this._newsService
      .paginate(this.page, this.defaultPageSize)
      .subscribe((res) => {
        this.newsPage = res;
        this.length = res.totalPages;

        this._cdr.detectChanges();
      });
  };
}
