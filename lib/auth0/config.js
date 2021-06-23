module.exports = {

    // Auth0 Domain
    authDomain: process.env.AUTH0_DOMAIN,

    // Auth0 Client ID
    authClientId: process.env.AUTH0_CLIENT_ID,

    // Auth0 Client Secret
    authClientSecret: process.env.AUTH0_CLIENT_SECRET,

    // Allowed Callback url
    cbUrl: "http://localhost:3000/api/callback",

    auth0scope: process.env.AUTH0_SCOPE,

    sessionCookie: process.env.SESSION_COOKIE_SECRET,

    sessionCookieLifetime: process.SESSION_COOKIE_LIFETIME
}