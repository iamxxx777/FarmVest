import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../themeContext'

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
                        <h2>FarmVest</h2>
                    </div>
                    <nav className={styles.links}>
                        <button>Home</button>
                        <button>About</button>
                        <button>Features</button>
                        <button>How it works</button>
                    </nav>
                    <div className={styles.buttons}>
                        <button className={styles.darkmode_toggle} onClick={setLocalTheme}>{darkMode ? <i className="uil uil-brightness-empty"></i> : <i class="uil uil-bright"></i>}</button>
                        <button className={styles.mb_hide_i}>Sign In</button>
                        <button className={styles.mb_hide_ii}>Get Started</button>
                        <button className={styles.mb_btn} onClick={() => setDrop(!drop)}>
                            <i className="uil uil-bars"></i>
                        </button>
                    </div>
                    <div className={[styles.dropdown, drop ? styles.drop_show : null].join(" ")}>
                        <button>Home</button>
                        <button>About</button>
                        <button>Features</button>
                        <button>How it works</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header