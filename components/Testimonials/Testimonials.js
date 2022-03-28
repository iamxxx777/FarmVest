import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from 'next/image'

import styles from '../../styles/Testimonials.module.scss'

const Testimonials = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <section className={[styles.testimonials, darkMode ? styles.darkmode : null].join(" ")}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.main_text}>
                        <h2>What <span>Customers</span> have to say</h2>
                    </div>
                    <div className={styles.sub_text}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Ut eu, mollis aenean sit dictum tincidunt. Ut arcu.
                        </p>
                    </div>
                </div>
                <div className={styles.images}>
                    <div className={styles.testimonial}>
                        <div className={styles.img}>
                            <Image 
                                src="/image/Pic 4.png"
                                alt="Tonia smart"
                                layout='fill'
                            />
                        </div>
                        <div className={styles.info}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus consequatur veritatis nam voluptatum odio! Quibusdam, vel incidunt.</p>
                            <h3>Tonia Smart</h3>
                        </div>
                    </div>

                    <div className={styles.testimonial}>
                        <div className={styles.img}>
                            <Image 
                                src="/image/Pic 5.png"
                                alt="Grace Obi"
                                layout='fill'
                            />
                        </div>
                        <div className={styles.info}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus consequatur veritatis nam voluptatum odio! Quibusdam, vel incidunt.</p>
                            <h3>Grace Obi</h3>
                        </div>
                    </div>
                </div>

                <div className={styles.btn}>
                    <button>View All</button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials