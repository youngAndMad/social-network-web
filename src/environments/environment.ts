import { IEnvironment } from "./environment.interface";

export const environment: IEnvironment = {
    apiUrl: 'http://localhost:8080',
    websocketUrl:'http://localhost:8080/api/v1/chat-service/social-app',
    oidcIssuer:'http://localhost:8000',
    oidcClientId:'bf277995ac4ca23438c9',
    oidcScope:'openid',
    oidcShowDebugInformation:true,
    oidcRedirectUrl:'http://localhost:4200' 
}