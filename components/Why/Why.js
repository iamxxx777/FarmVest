import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from 'next/image'

import styles from '../../styles/Why.module.scss'

const Why = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <section id="features" className={[styles.why, darkMode ? styles.darkmode : null].join(" ")}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.main_text}>
                        <h2>Why choose <span>FarmVest</span></h2>
                    </div>
                    <div className={styles.sub_text}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ut eu, mollis aenean sit dictum tincidunt. Ut arcu.
                        </p>
                    </div>
                    <div className={styles.points}>
                        <div className={styles.point}>
                            <div className={styles.num}>
                                <p>1</p>
                            </div>
                            <div className={styles.text}>
                                <p>Real-time Checkup</p>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.num}>
                                <p>2</p>
                            </div>
                            <div className={styles.text}>
                                <p>Flexibility in Investment</p>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.num}>
                                <p>3</p>
                            </div>
                            <div className={styles.text}>
                                <p>Encrypted and Secured</p>
                            </div>
                        </div>
                        <div className={styles.point}>
                            <div className={styles.num}>
                                <p>4</p>
                            </div>
                            <div className={styles.text}>
                                <p>Withdraw Anytime</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.btn}><button>Learn More</button></div>
                </div>
                <div className={styles.img}>
                    <div className={styles.img_container}>
                        <Image 
                            src="/Pic 3.jpg"
                            alt="Lady on the street using farmVest"
                            layout='fill'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why