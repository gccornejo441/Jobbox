import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="google-site-verification" content="z4mQ86Y24Bk76FQBB4S1tXFVqefEshTToiFeCe5wg9E" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-C5L4PE13RM"></script>
            </Head>
            <main className="h-screen mt-12">
                <div>{children}</div>
            </main>
        </>
    );
}

export default Layout;