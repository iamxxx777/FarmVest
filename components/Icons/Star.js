import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from "next/image"

const Star = ({ styles }) => {
    const { darkMode } = useContext(ThemeContext)

    return (
        <div className={styles.star}>
            <Image
                src={darkMode ? '/icons/star2-dark.svg' : '/icons/star2.svg'}
                alt="star filled"
                width={18}
                height={18}
            />
        </div>
    )
}

export default Star