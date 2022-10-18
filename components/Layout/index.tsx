import React, { ReactElement, useEffect, useContext } from 'react'
import styles from './Layout.module.css'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
// import { getAppStateHtml } from "../../store/hooks"
import { HTMLContext } from "../../pages/_app"


interface iLayoutProps {
    children: ReactElement
}

const Layout = (props: iLayoutProps) => {
    // const html = getAppStateHtml();
    const { html } = useContext(HTMLContext);
    useEffect(() => {
        const htmlEl = document.querySelector('html')
        if (!htmlEl) return
        htmlEl.dir = html.dir
        htmlEl.lang = html.lang
    }, [html])

    return (
        <div className={styles.layout}>
            <Head>
                <title>Siman Tov Jamberu Portfolio</title>
                <meta name="application-name" content='Portfolio' />
                <meta name="description" content='just another Portfolio' />
                <meta name="author" content="siman tov jamberu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main children={props.children} />
            <Footer />
        </div>
    )
}

export default Layout