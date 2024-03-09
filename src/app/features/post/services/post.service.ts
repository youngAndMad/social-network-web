import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { PostType } from './../models/enum/post-type';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private readonly _http: HttpClient) {}

  addPost = (
    authorId: number,
    content: string,
    type: PostType,
    files: File[]
  ): Observable<any> => {
    let formData = new FormData();

    files.forEach((file) => {
      formData.append('file', file);
    });
    formData.append('type', type);
    formData.append('content', content);
    formData.append('ownerID', authorId.toString());

    return this._http.post('/api/v1/post', formData);
  };

  deletePost = (id: number): Observable<any> =>
    this._http.delete(`/api/v1/post/${id}`);

  authorPosts = (authorId: number, postType: PostType): Observable<Post[]> =>
    this._http.get<Post[]>('/api/v1/post', {
      params: {
        ownerID: authorId,
        postType: postType,
      },
    });
}
