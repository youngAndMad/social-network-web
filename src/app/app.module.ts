import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './common/interceptor/api.interceptor';
import { QrModule } from './features/qr/qr.module';
import { NewsModule } from "./features/news/news.module";
import { EnvService } from "./common/service/env.service";
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ReactiveFormsModule } from "@angular/forms";
import { KeycloakAngularModule, KeycloakService } from "keycloak-angular";
import { initializeKeycloak } from "./common/factory/keycloak-init.factory";
import { HomeComponent } from './shared/layout/home/home.component';
import { WebsocketService } from "./common/service/websocket.service";
import { ChatModule } from "./features/chat/chat.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    QrModule,
    NewsModule,
    BrowserAnimationsModule,
    TuiRootModule,
    KeycloakAngularModule,
    TuiDialogModule,
    TuiAlertModule,
    ChatModule
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
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
