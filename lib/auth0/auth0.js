import config from './config';
import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
    clientId: config.authClientId,
    clientSecret: config.authClientSecret,
    scope: config.auth0scope || 'openid profile',
    domain: config.authDomain,
    redirectUri:
        config.cbUrl ||
        'http://localhost:3000/api/callback',
    postLogoutRedirectUri: 'http://localhost:3000/',
    session: {
        cookieSecret: config.sessionCookie,
        cookieLifetime: Number(config.sessionCookieLifetime) || 7200,
    },
})