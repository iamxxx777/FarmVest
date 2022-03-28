import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from 'next/image'
import Elipse from '../Elipse/Elipse'

import styles from '../../styles/Download.module.scss'

const Download = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <section className={[styles.download, darkMode ? styles.darkmode : null].join(" ")}>
            <div className={styles.container}>
                <div className={styles.center}>
                    <div className={styles.text}>
                        <h2>Download <span>FarmVest app</span> and invest in your future</h2>
                    </div>
                    <div className={styles.btns}>
                        <button>
                            <Image 
                                src="/icons/app-store.svg"
                                alt="Get FarmVest on app store"
                                width={100}
                                height={40}
                            />
                        </button>
                        <button>
                            <Image 
                                src="/icons/google-play.svg"
                                alt="Get FarmVest on google play"
                                width={100}
                                height={40}
                            />
                        </button>
                    </div>
                    <Elipse styles={styles} />
                </div>
            </div>
        </section>
    )
}

export default Download