import React from 'react'
import Head from 'next/head'

const Layout = ({ children }) => {
    
    return (
        <>
        <main>
            <Head/>
            <div>{children}</div>
        </main>
    </>
    )
}

export default Layout;