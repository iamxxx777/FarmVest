import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from "next/image"

const CircleFilled = ({ styles }) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={styles.circle_filled}>
        <Image
            src={darkMode ? '/circle-filled-dark.svg' : '/circle-filled.svg'}
            alt="circle filled"
            width={15}
            height={15}
        />
    </div>
  )
}

export default CircleFilled