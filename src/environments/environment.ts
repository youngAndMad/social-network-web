import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
    apiUrl: 'http://localhost:8000',
    websocketUrl: 'http://localhost:9393/social-app',
    kcClientId: 'socialapp-web',
    kcRealm: 'socialapp',
    kcRedirectUrl: 'http://localhost:4200',
    kcIssuerUrl:'http://localhost:8080'
}