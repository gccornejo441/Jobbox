import config from './config';
import { initAuth0 } from '@auth0/nextjs-auth0';

export default initAuth0({
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: process.env.AUTH0_SCOPE || 'openid profile',
    domain: process.env.AUTH0_DOMAIN,
    redirectUri:
        config.cbUrl ||
        'http://localhost:3000/api/callback',
    postLogoutRedirectUri: 'http://localhost:3000/',
    session: {
        cookieSecret: process.env.SESSION_COOKIE_SECRET,
        cookieLifetime: Number(process.SESSION_COOKIE_LIFETIME) || 7200,
    },
})