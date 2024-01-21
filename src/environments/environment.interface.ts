export interface IEnvironment{
    apiUrl: string;
    websocketUrl:string;
    oidcIssuer:string;
    oidcClientId:string;
    oidcScope:string;
    oidcShowDebugInformation:true;
    oidcRedirectUrl:string
}