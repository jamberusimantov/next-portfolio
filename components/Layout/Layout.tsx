import Head from 'next/head'
import React, { ReactElement } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props: { children: ReactElement }) => {

    return (
        <div className='container'>
            <Head>
                <title>Portfolio</title>
                <meta name="application-name" content='Portfolio' />
                <meta name="description" content='just another Portfolio' />
                <meta name="author" content="siman tov jamberu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout