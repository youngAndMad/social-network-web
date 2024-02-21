import { Component, Input } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';
import { FileService } from 'src/app/features/file/services/file.service';
import { FileMetadata } from '../../models/file-metadata';

@Component({
  selector: 'sp-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  @Input() news: News;
  index: number = 0;

  constructor(
    private readonly _newsService: NewsService,
    private readonly _fileService: FileService
  ) {}

  downloadFileUrl = (metadata: FileMetadata) => {
    return this._fileService.generateDownloadUrl(metadata.url);
  };
}
