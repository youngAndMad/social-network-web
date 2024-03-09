import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TuiFileLike } from '@taiga-ui/kit';
import { ToastrService } from 'ngx-toastr';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'sp-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  createPostForm: FormGroup;
  rejectedFiles: readonly TuiFileLike[] = [];

  constructor(
    private readonly _activateRoute: ActivatedRoute,
    private readonly _postService: PostService,
    private readonly _toastr: ToastrService,
    private readonly _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this._activateRoute.queryParamMap.subscribe((queryMap) => {
      let postType = queryMap.get('postType');
      let authorId = queryMap.get('authorId');

      if (!postType && !authorId) {
        this._toastr.error('Required params does not passed');
        setTimeout(() => {
          this.goBack();
        }, 2000);
      }
      console.log(authorId, postType);
      this.createPostForm = this._fb.group({
        type: [postType],
        authorId: [authorId],
        content: [null, [Validators.required, Validators.minLength(20)]],
        file: [],
      });
    });
  }

  get fileControl() {
    return this.createPostForm.get('file');
  }

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({ name }: File): void {
    this.fileControl?.setValue(
      this.fileControl.value?.filter(
        (current: File) => current.name !== name
      ) ?? []
    );
  }

  clearRejected({ name }: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      (rejected) => rejected.name !== name
    );
  }

  submitForm() {
    if (!this.createPostForm.valid) {
      this._toastr.error('Invalid form');
      return;
    }
    const { authorId, content, type, file } = this.createPostForm.value;
    console.log(this.createPostForm.value);

    this._postService.addPost(authorId, content, type, file).subscribe(() => {
      this._toastr.success('Post published successfully');
      this.createPostForm.reset();
    });
  }

  goBack() {
    window.history.back();
  }
}
