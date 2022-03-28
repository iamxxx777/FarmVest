import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Elipse from '../Elipse/Elipse'
import Star from '../Icons/Star'
import Star2 from '../Icons/Star2'
import Naira from '../Icons/Naira'
import Circle from '../Icons/Circle'
import Dollar from '../Icons/Dollar'
import MoneyBag from '../Icons/MoneyBag'
import CircleFilled from '../Icons/CircleFilled'

import styles from '../../styles/Hero.module.scss'

const Hero = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <section id="home" className={[styles.hero, darkMode ? styles.darkmode : null].join(" ")}>
            <div className={styles.hero_container}>
                <div className={styles.hero_info}>
                    <div className={styles.main_text}>
                        <h1>The easiest and fastest way to <span>Invest</span> in Agriculture</h1>
                    </div>
                    <div className={styles.sub_text}>
                        <h2>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu, mollis aenean sit dictum tincidunt. 
                            Ut arcu, suscipit ac etLorem ipsum.
                        </h2>
                    </div>
                    <div className={styles.form}>
                        <form>
                            <input type="email" name="email" placeholder='Enter your Email' />
                            <button type="submit">Get started</button>
                        </form>
                    </div>
                </div>
                <div className={styles.hero_brands}>
                    <div className={styles.brands}>
                        <div className={styles.brand}><img src={darkMode ? "/marketwatch-dark.svg" : "/marketwatch-dark.svg"} alt="market watch" /></div>
                        <div className={styles.brand}><img src={darkMode ? "/forbes-dark.svg" : "/forbes.svg"} alt="forbes" /></div>
                        <div className={styles.brand}><img src={darkMode ? "/business-insider-dark.svg" : "/business-insider.svg"} alt="business insider" /></div>
                        <div className={styles.brand}><img src={darkMode ? "/fidelity-investments-dark.svg" : "/fidelity-investments.svg"} alt="fidelity investments" /></div>
                        <div className={styles.brand}><img src={darkMode ? "/wired-dark.svg" : "/wired.svg"} alt="wired" /></div>
                    </div>
                </div>
                <Elipse styles={styles} />
                <div className={styles.icons}>
                    <Star styles={styles} />
                    <Star2 styles={styles} />
                    <Naira styles={styles} />
                    <Dollar styles={styles} />
                    <Circle styles={styles} />
                    <CircleFilled styles={styles} />
                    <MoneyBag styles={styles} />
                </div>
            </div>
        </section>
    )
}

export default Hero