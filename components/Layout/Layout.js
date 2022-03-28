import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Head from 'next/head'
import Footer from "../Footer/Footer"
import Header from "../Header/Header"


import styles from '../../styles/Layout.module.scss'

const Layout = ({ children }) => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={[styles.layout, darkMode ? styles.darkmode : null].join(" ")}>
            <Head>
                <title>FarmVest</title>
                <meta name="description" content="Farmvest bring investment oppurtunities in the agricultural sector to your fingertips" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.container}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout