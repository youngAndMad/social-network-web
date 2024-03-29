import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NewsService } from '../../services/news.service';
import { maxFilesLength } from '../../validate/maxFilesLength.validator';
import { TuiFileLike } from '@taiga-ui/kit';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sp-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss'],
})
export class CreateNewsComponent implements OnInit {
  newsForm: FormGroup;
  rejectedFiles: readonly TuiFileLike[] = [];
  readonly control = new FormControl([], [maxFilesLength(5)]);

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _newsService: NewsService,
    private readonly _toast: ToastrService
  ) {
    this.newsForm = this._fb.group({
      content: [null, [Validators.required]],
      title: [null, [Validators.required]],
      emailSending: [false, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe((response) => {
      console.info('STATUS', response);
      console.info('ERRORS', this.control.errors, '\n');
    });
  }

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({ name }: File): void {
    this.control.setValue(
      this.control.value?.filter((current: File) => current.name !== name) ?? []
    );
  }

  clearRejected({ name }: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      (rejected) => rejected.name !== name
    );
  }

  submitNewsForm() {
    let news = this.newsForm.value;
    this._newsService
      .createNews(
        news.title,
        news.content,
        news.emailSending,
        this.control.value!
      )
      .subscribe(() => {
        this.newsForm.reset();
        this.control.reset();
        this._toast.success('News created successfully');
      });
  }

  cancel() {
    window.history.back();
  }
}
