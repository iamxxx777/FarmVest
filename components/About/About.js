import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from 'next/image'
import Elipse from '../Elipse/Elipse'

import styles from '../../styles/About.module.scss'

const About = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <section id="about" className={[styles.about, darkMode ? styles.darkmode : null].join(" ")}>
            <div className={styles.container}>
                <div className={styles.about_info}>
                    <div className={styles.main_text}>
                        <h2>How <span>FarmVest</span> works</h2>
                    </div>
                    <div className={styles.sub_text}>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. 
                        Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur 
                        </p>
                    </div>
                    <div className={styles.keys}>
                        <div className={styles.key}>
                            <div className={styles.icon}>
                                <Image
                                    src={`/${darkMode ? 'download-dark' : 'download'}.svg`}
                                    alt='create account'
                                    width={30}
                                    height={35}
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Download FarmVest</h2>
                                <p>Start by downloading FarmVest on your Android or IOS</p>
                            </div>
                        </div>
                        <div className={styles.key}>
                            <div className={styles.icon}>
                                <Image
                                    src={`/${darkMode ? 'create-dark' : 'create'}.svg`}
                                    alt='create account'
                                    width={20}
                                    height={25}
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Create Account</h2>
                                <p>Start by downloading FarmVest on your Android or IOS</p>
                            </div>
                        </div>
                        <div className={styles.key}>
                            <div className={styles.icon}>
                                <Image
                                    src={`/${darkMode ? 'bank-dark' : 'bank'}.svg`}
                                    alt='Link BVN'
                                    width={20}
                                    height={25}
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Link your Bank Account</h2>
                                <p>Start by downloading FarmVest on your Android or IOS</p>
                            </div>
                        </div>
                        <div className={styles.key}>
                            <div className={styles.icon}>
                                <Image
                                    src={`/${darkMode ? 'dollar-dark' : 'dollar'}.svg`}
                                    alt='start investing'
                                    width={20}
                                    height={25}
                                />
                            </div>
                            <div className={styles.text}>
                                <h2>Start Investing</h2>
                                <p>Start by downloading FarmVest on your Android or IOS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.about_img}>
                    <div className={styles.img_container}>
                        <Image 
                            src="/Pic 1.jpg"
                            alt="Male user using farmVest"
                            layout='fill'
                        />
                    </div>
                    <Elipse styles={styles} />
                </div>
            </div>
        </section>
    )
}

export default About