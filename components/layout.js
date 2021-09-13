import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {

    return (
        <>
            <Head>
                <meta name="google-site-verification" content="z4mQ86Y24Bk76FQBB4S1tXFVqefEshTToiFeCe5wg9E" />
            </Head>
            <main>
                <div>{children}</div>
                <div className="relative bottom-0 border-t border-gray-200 w-full flex justify-center">
                    <div className="py-5 text-gray-400">
                        &copy; 2021 Jobbox
                    </div>
                </div>
            </main>
        </>
    );
}

export default Layout;