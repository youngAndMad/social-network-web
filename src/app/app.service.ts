import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable()
export class AppService {

    public clientId = 'demo';
    public redirectUri = 'http://localhost:4200/';

    constructor(private _http: HttpClient) { }

    retrieveToken(code: string) {
        let params = new URLSearchParams();
        params.append('grant_type', 'authorization_code');
        params.append('client_id', this.clientId);
        params.append('redirect_uri', this.redirectUri);
        params.append('code', code);

        let headers =
            new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });

        this._http.post('http://localhost:8080/oauth2/token',
            params.toString(), { headers: headers })
            .subscribe(
                data => this.saveToken(data),
                err => alert('Invalid Credentials')
                );
    }


    saveToken(token: any) {
        localStorage.setItem("access_token", token.access_token);
        console.log('Obtained Access token');
        window.location.href = 'http://localhost:4200';
    }

    me() {}
}