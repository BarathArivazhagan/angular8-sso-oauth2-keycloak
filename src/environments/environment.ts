// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  sso: {
    clientId : 'demo-app',
    serverUrl: 'http://localhost:8080/auth/realms/master',
    issuer :  '/oauth2/token',
    redirectUri : window.location.origin + '/callback',
    scope: 'openid profile',
    tokenEndpoint:  '/protocol/openid-connect/token',
    userinfoEndpoint:  '/protocol/openid-connect/userinfo',
    authorizationEndpoint:  '/protocol/openid-connect/auth',
    jwksEndpoint: '/protocol/openid-connect/certs',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'id_token token'
   
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
