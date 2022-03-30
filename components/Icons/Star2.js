import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from "next/image"

const Star2 = ({ styles }) => {

  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={styles.star_filled}>
      <Image
          src={darkMode ? '/star-dark.svg' : '/star.svg'}
          alt="star filled"
          width={18}
          height={18}
      />
    </div>
  )
}

export default Star2