import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from 'src/app/common/service/env.service';
import { FileMetadata } from './../../news/models/file-metadata';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(
    private readonly _http: HttpClient,
    private readonly _envService: EnvService
  ) {}

  generateDownloadUrl = (url: string): string =>
    this._envService.apiUrl + '/api/v1/file/download/' + url;

  downloadFile = (metadata: FileMetadata | string): Observable<Blob> => {
    return this._http.get(
      '/api/v1/file/' + typeof metadata === 'string'
        ? metadata
        : (metadata as any).url, // never do this please refactor,
      {
        responseType: 'blob',
      }
    );
  };
}
