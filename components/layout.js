import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <meta name="google-site-verification" content="z4mQ86Y24Bk76FQBB4S1tXFVqefEshTToiFeCe5wg9E" />
            </Head>
            <main className="bg-regal-blue h-screen mt-12">
                <div>{children}</div>
            </main>
        </>
    );
}

export default Layout;