import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Link from 'next/link'

import styles from '../../styles/Header.module.scss'

const Header = () => {

    const [drop, setDrop] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { darkMode, setLocalTheme } = useContext(ThemeContext)

    const sticky = () => {
        if(window.scrollY > 20) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", sticky)
        return () => {
            window.removeEventListener('scroll', sticky)
        }
    }, [])

    return (
        <header className={[styles.header, darkMode ? styles.darkmode : null].join(" ")}>
            <div className={[styles.scroll, scrolled ? styles.scrolled : null].join(" ")}>
                <div className={styles.header_container}>
                    <div className={styles.logo}>
                        <button>
                            <Link href="#home" passHref>
                                <h2>FarmVest</h2>
                            </Link>
                        </button>
                    </div>
                    <nav className={styles.links}>
                        <button><Link href='#home'>Home</Link></button>
                        <button><Link href='#about'>About</Link></button>
                        <button><Link href='#features'>Features</Link></button>
                        <button><Link href='#faqs'>How it works</Link></button>
                    </nav>
                    <div className={styles.buttons}>
                        <button className={styles.darkmode_toggle} onClick={setLocalTheme}>{darkMode ? <i className="uil uil-brightness-empty"></i> : <i className="uil uil-bright"></i>}</button>
                        <button className={styles.mb_hide_i}>Sign In</button>
                        <button className={styles.mb_hide_ii}>Get Started</button>
                        <button className={styles.mb_btn} onClick={() => setDrop(!drop)}>
                            <i className="uil uil-bars"></i>
                        </button>
                    </div>
                    <div className={[styles.dropdown, drop ? styles.drop_show : null].join(" ")}>
                        <button><Link href='#home'>Home</Link></button>
                        <button><Link href='#about'>About</Link></button>
                        <button><Link href='#features'>Features</Link></button>
                        <button><Link href='#faqs'>How it works</Link></button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header