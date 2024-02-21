import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Page } from 'src/app/common/model/page';
import { News } from '../../models/news';
import { FileService } from 'src/app/features/file/services/file.service';
import { FileMetadata } from '../../models/file-metadata';

@Component({
  selector: 'sp-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  length = 0;
  newsPage: Page<News>;
  page = 0;
  defaultPageSize = 2;

  filePaginationMap = new Map<number, number>();

  constructor(
    private readonly _newsService: NewsService,
    private readonly _fileService: FileService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.refreshNewsPage(0);
    console.table(this.filePaginationMap);
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

        this.newsPage.content.forEach((news) => {
          console.log('wanna ', news.id);
          this.filePaginationMap.set(news.id, 0);
        });

        this._cdr.detectChanges();
      });
  };

  downloadFileUrl = (metadata: FileMetadata) => {
    return this._fileService.generateDownloadUrl(metadata.url);
  };

  updateFileIndex(fileId: number, index: number) {
    this.filePaginationMap.set(fileId, index);
  }

  getFilePaginationIndexOrDefault(fileId: number): number {
    const index = this.filePaginationMap.get(fileId);
    return typeof index === 'number' ? index : 0;
  }
}
