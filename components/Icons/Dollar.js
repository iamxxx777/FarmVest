import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from "next/image"

const Dollar = ({ styles }) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={styles.dollar}>
      <Image
          src={darkMode ? '/doll-dark.svg' : '/doll.svg'}
          alt="naira"
          width={20}
          height={20}
      />
    </div>
  )
}

export default Dollar