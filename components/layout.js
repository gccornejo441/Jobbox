import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
    
    return (
        <>
        <main>
            <Head/>
            <div>{children}</div>
            <div className="relative bottom-0 border-t border-gray-200 w-full flex justify-center">
                <div className="py-5 text-gray-400">
                &copy; 2021 Jobbox 
                </div>
            </div>
        </main>
    </>
    )
}

export default Layout;