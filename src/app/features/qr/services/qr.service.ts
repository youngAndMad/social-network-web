import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private _http: HttpClient) { }

  generateQr = (link: string): Observable<any> => {
    return this._http.get('qr/generate', { params: { link }, responseType: 'blob' })
  }
}
