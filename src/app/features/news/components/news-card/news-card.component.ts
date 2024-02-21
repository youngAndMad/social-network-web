import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { News } from '../../models/news';
import { FileService } from 'src/app/features/file/services/file.service';
import { FileMetadata } from '../../models/file-metadata';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sp-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent implements OnInit {
  @Input() news: News;

  index: number = 0;
  modalSubscription: Subscription;

  newsUpdateForm: FormGroup;

  constructor(
    private readonly _newsService: NewsService,
    private readonly _fileService: FileService,
    private readonly _router: Router,
    private readonly _toast: ToastrService,
    @Inject(TuiDialogService) private readonly _dialogs: TuiDialogService,
    private readonly _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newsUpdateForm = this._fb.group({
      title: [this.news.title, [Validators.required]],
      content: [this.news.content, [Validators.required]],
    });
  }

  downloadFileUrl = (metadata: FileMetadata) => {
    return this._fileService.generateDownloadUrl(metadata.url);
  };

  showDialog(
    content: PolymorpheusContent<TuiDialogContext>,
    label: string
  ): void {
    this.modalSubscription = this._dialogs
      .open(content, { label: label })
      .subscribe();
  }

  closeDialog() {
    this.modalSubscription.unsubscribe();
  }

  deleteNews() {
    this._newsService.deleteNews(this.news.id).subscribe(() => {
      this._toast.success('News deleted successfully');
      this._router.navigate(['/news']);
    });
  }

  updateNews() {
    let formValue = this.newsUpdateForm.value;

    this._newsService
      .updateNews(formValue.content, formValue.title, this.news.id)
      .subscribe((data) => {
        this.news = data;
        this._toast.success('News updated successfully');
        this.closeDialog();
      });
  }
}
