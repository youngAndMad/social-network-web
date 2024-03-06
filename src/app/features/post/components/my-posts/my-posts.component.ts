import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import { UserResponseDto } from 'src/app/features/user/models/dto/user-response.dto';
import { UserService } from 'src/app/features/user/services/user.service';
import { PostType } from '../../models/enum/post-type';
import { PostService } from '../../services/post.service';
import { Post } from './../../models/post';

@Component({
  selector: 'sp-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss'],
})
export class MyPostsComponent implements OnInit {
  user: UserResponseDto;
  currentUserPosts: Post[] = [];

  constructor(
    private readonly _postService: PostService,
    private readonly _toastr: ToastrService,
    private readonly _userService: UserService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._userService.currentUser
      .pipe(filter((user) => user !== undefined && user !== null))
      .subscribe((user) => {
        this.user = user;

        this._postService
          .authorPosts(this.user.user.id!, PostType.USER_PROFILE_POST)
          .subscribe((data) => {
            this.currentUserPosts = data;
            console.log(this.currentUserPosts);

            this._cdr.detectChanges();
          });
      });
  }
}
