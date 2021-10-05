import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <meta name="google-site-verification" content="z4mQ86Y24Bk76FQBB4S1tXFVqefEshTToiFeCe5wg9E" />
            </Head>
            <main className="bg-regal-blue h-screen">
                <div>{children}</div>
            </main>
            <footer>
                <div className="pt-5 text-white relative bottom-0 bg-regal-blue text-center pb-8">
                    &copy; 2021 Jobbox.me
                </div>
            </footer>
        </>
    );
}

export default Layout;