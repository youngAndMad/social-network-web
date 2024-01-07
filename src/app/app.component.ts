import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'social-network-web';

  authConfig: AuthConfig = {
    issuer: 'http://localhost:8080',
    redirectUri: 'http://127.0.0.1:4200',
    clientId: 'demo',
    scope: 'openid user.read user.write',
    responseType: 'code',
  };

  constructor(private oauthService: OAuthService,private http: HttpClient) { }

  ngOnInit(): void {
    this.configureWithNewConfigApi();
    console.log('hello')
  }

  get isLoggedIn() {
    return !!this.oauthService.getIdToken();
  }

  handleLoginClick = () => (this.isLoggedIn ? this.oauthService.logOut() : this.oauthService.initLoginFlow());

  private configureWithNewConfigApi() {
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.configure(this.authConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin()
      .then(res => console.log(res));

    this.http.get('http://localhost:8080/api/v1/auth/me')
          .subscribe(res  => {console.log(res)})
  }
}
