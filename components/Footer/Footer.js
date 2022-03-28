import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import styles from '../../styles/Footer.module.scss'

const Footer = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <footer className={[styles.footer, darkMode ? styles.darkmode : null].join(" ")}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.text}>
                        <h2>FarmVest</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, 
                            fugiat nesciunt autem, alias nam facilis recusandae doloremque ab cumque nulla quo dignissimos non odit!
                        </p>
                    </div>

                    <div className={styles.subscribe}>
                        <p>Subscribe to our newsletter to get premium tips and offers about investment
                            oppurtunities from top analysts in the field
                        </p>
                        <div className={styles.form}>
                            <form action="#">
                                <input type="email" name="email" placeholder="Enter your email" />
                                <button>Subscribe</button>
                            </form>
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.socials}>
                            <h2>Follow Us</h2>
                            <div className={styles.btns}>
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>                           
                        </div>
                        <div className={styles.phone}>
                            <h2>Call Us</h2>
                            <div className={styles.num}>
                                <p>+23408166179988</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.bottom}>
                    <div className={styles.copywrite}>
                        <p>© 2021 All Rights Reserved</p>
                    </div>
                    <div className={styles.links}>
                        <button>Privacy Policy</button>
                        <button>Terms of Use</button>
                        <button>Sales and Refunds</button>
                        <button>Legal</button>
                        <button>Sitemap</button>
                    </div>
                </div>
            </div>        
        </footer>
    )
}

export default Footer