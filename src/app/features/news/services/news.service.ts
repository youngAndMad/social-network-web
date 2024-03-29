import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { Page } from 'src/app/common/model/page';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private readonly _http: HttpClient) {}

  deleteNews = (id: number): Observable<any> => {
    return this._http.delete(`/api/v1/news/${id}`);
  };

  getNewsById = (id: number): Observable<News> => {
    return this._http.get<News>(`/api/v1/news/${id}`);
  };

  updateNews = (content: string, title: string, id: number): Observable<News> =>
    this._http.patch<News>(
      `/api/v1/news/${id}`,
      {},
      { params: { title, content } }
    );

  paginate = (page: number, pageSize: number): Observable<Page<News>> => {
    return this._http.get<Page<News>>('/api/v1/news', {
      params: { page, pageSize },
    });
  };

  createNews = (
    title: string,
    content: string,
    emailSending: boolean,
    files: File[]
  ): Observable<News> => {
    let formData = new FormData();

    formData.append('emailSending', `${emailSending}`);
    formData.append('content', content);
    formData.append('title', title);

    files.forEach((file) => {
      formData.append('files', file, file.name);
    });

    console.log('wanna send post request');
    return this._http.post<News>(`/api/v1/news`, formData);
  };
}
