import { useState, useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from 'next/image'

import styles from '../../styles/Faqs.module.scss'

const Faqs = () => {

    const { darkMode } = useContext(ThemeContext)
    const [active, setActive] = useState(0)

    const handleClick = (value) => {
        if(active === value) {
            setActive(0)
        } else {
            setActive(value)
        }
    }

    return (
        <section className={[styles.faqs, darkMode ? styles.darkmode : null].join(" ")}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.main_text}>
                        <h2>Your <span>Pathway</span> to future investments</h2>
                    </div>
                    <div className={styles.sub_text}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ut eu, mollis aenean sit dictum tincidunt. Ut arcu, suscipit ac etLorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur 
                        </p>
                    </div>
                    <div className={styles.questions}>
                        <div className={styles.question}>
                            <div className={styles.head}>
                                <p>What is FarmVest?</p>
                                <button className={active === 1 ? styles.active : null} onClick={() => handleClick(1)}><i className="uil uil-angle-down"></i></button>
                            </div>
                            {active === 1 && 
                                <div className={styles.answer}>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Perspiciatis expedita harum doloremque dolorum illo vel voluptatum commodi, quo temporibus ipsum?
                                    </p>
                                </div>
                            }
                        </div>
                        <div className={styles.question}>
                            <div className={styles.head}>
                                <p>How safe is FarmVest?</p>
                                <button className={active === 2 ? styles.active : null} onClick={() => handleClick(2)}><i className="uil uil-angle-down"></i></button>
                            </div>
                            {active === 2 && 
                                <div className={styles.answer}>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Perspiciatis expedita harum doloremque dolorum illo vel voluptatum commodi, quo temporibus ipsum?
                                    </p>
                                </div>
                            }
                        </div>
                        <div className={styles.question}>
                            <div className={styles.head}>
                                <p>What do i gain from FarmVest?</p>
                                <button className={active === 3 ? styles.active : null} onClick={() => handleClick(3)}><i className="uil uil-angle-down"></i></button>
                            </div>
                            {active === 3 && 
                                <div className={styles.answer}>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Perspiciatis expedita harum doloremque dolorum illo vel voluptatum commodi, quo temporibus ipsum?
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.img}>
                    <div className={styles.img_container}>
                        <Image 
                            src="/image/Pic 2.jpg"
                            alt="Male on a train using farmVest"
                            layout='fill'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faqs