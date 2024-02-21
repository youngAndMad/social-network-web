import { TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './common/interceptor/api.interceptor';
import { QrModule } from './features/qr/qr.module';
import { NewsModule } from './features/news/news.module';
import { EnvService } from './common/service/env.service';
import { initializeKeycloak } from './common/factory/keycloak-init.factory';
import { WebsocketService } from './common/service/websocket.service';
import { ChatModule } from './features/chat/chat.module';
import { UserModule } from './features/user/user.module';
import { TuiModule } from './features/tui/tui.module';
import { ChannelModule } from './features/channel/channel.module';
import { LayoutModule } from './shared/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    QrModule,
    NewsModule,
    BrowserAnimationsModule,
    TuiRootModule,
    KeycloakAngularModule,
    ChatModule,
    UserModule,
    TuiModule,
    ChannelModule,
    LayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService, EnvService],
    },
    WebsocketService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
