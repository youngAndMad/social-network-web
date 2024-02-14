import { FileMetadata } from './../../news/models/file-metadata';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from 'src/app/common/service/env.service';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _envService: EnvService
  ) {}

  generateDownloadUrl = (metadata: FileMetadata): string =>
    this._envService.apiUrl + '/api/v1/file/' + metadata.url;

  downloadFile = (metadata: FileMetadata): Observable<Blob> => {
    return this._http.get('/api/v1/file/' + metadata.url, {
      responseType: 'blob',
    });
  };
}
