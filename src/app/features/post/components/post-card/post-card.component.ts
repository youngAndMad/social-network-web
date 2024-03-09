import { Component, Input } from '@angular/core';
import { FileService } from 'src/app/features/file/services/file.service';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'sp-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() post: Post;
  index: number = 0;

  constructor(
    private readonly _fileService: FileService,
    private readonly _postService: PostService
  ) {}

  downloadUrl = (url: string) => this._fileService.downloadFile(url);

  deletePost() {}
}
