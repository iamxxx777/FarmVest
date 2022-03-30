import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from "next/image"

const Circle = ({ styles }) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={styles.circle}>
      <Image
        src={darkMode ? '/circle-dark.svg' : '/circle.svg'}
        alt="circle"
        width={18}
        height={18}
      />
    </div>
  )
}

export default Circle