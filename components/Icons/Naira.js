import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from "next/image"

const Naira = ({ styles }) => {
    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={styles.naira}>
            <Image
                src={darkMode ? '/naira-dark.svg' : '/naira.svg'}
                alt="naira"
                width={18}
                height={18}
            />
        </div>
    )
}

export default Naira