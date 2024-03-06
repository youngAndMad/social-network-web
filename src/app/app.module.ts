import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiRootModule } from '@taiga-ui/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeKeycloak } from './common/factory/keycloak-init.factory';
import { ApiInterceptor } from './common/interceptor/api.interceptor';
import { EnvService } from './common/service/env.service';
import { WebsocketService } from './common/service/websocket.service';
import { ChannelModule } from './features/channel/channel.module';
import { ChatModule } from './features/chat/chat.module';
import { NewsModule } from './features/news/news.module';
import { PostModule } from './features/post/post.module';
import { QrModule } from './features/qr/qr.module';
import { TuiModule } from './features/tui/tui.module';
import { UserModule } from './features/user/user.module';
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
    PostModule,
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
