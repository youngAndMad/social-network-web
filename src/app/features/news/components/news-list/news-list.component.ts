import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Page } from 'src/app/common/model/page';
import { News } from '../../models/news';
import { FileService } from 'src/app/features/file/services/file.service';
import { FileMetadata } from '../../models/file-metadata';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  length = 0;
  newsPage: Page<News>;
  page = 0;
  defaultPageSize = 10;

  constructor(
    private readonly _newsService: NewsService,
    private readonly _fileService: FileService
  ) {}

  ngOnInit(): void {
    this.refreshNewsPage(0);
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
      });
  };

  downloadFileUrl = (metadata: FileMetadata) => {
    this._fileService.generateDownloadUrl(metadata);
  };
}
