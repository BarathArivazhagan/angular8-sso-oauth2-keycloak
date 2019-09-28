// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'http://localhost:8080/auth/realms/master',
  sso: {
    clientId : 'demo-app',    
    redirectUri : window.location.origin + '/',
    scope: 'openid profile',
    tokenEndpoint:  '/protocol/openid-connect/token',
    userinfoEndpoint:  '/protocol/openid-connect/userinfo',
    authorizationEndpoint:  '/protocol/openid-connect/auth',
    jwksEndpoint: '/protocol/openid-connect/certs',
    showDebugInformation: true,
    requireHttps: false,
    responseType: 'id_token token',
    logoutUrl: '/protocol/openid-connect/logout', 
    clearHashAfterLogin: true,
    jwks: {
      keys: [
        {
          kid: "",
          kty: "RSA",
          alg: "RS256",
          use: "sig",
          n: "",
          e: "AQAB",
          x5c: [
          ""
          ],
          x5t: "",
          "x5t#S256": ""
          }
      ]
      }
   
  }
};
// note: auth/realms/master/.well-known/openid-configuration  for retrieving the urls.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
