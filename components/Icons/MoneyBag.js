import { useContext } from 'react'
import { ThemeContext } from '../themeContext'

import Image from "next/image"

const MoneyBag = ({ styles }) => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={styles.bag}>
      <Image
        src={darkMode ? '/money.svg' : '/money-dark.svg'}
        alt="money bag"
        width={30}
        height={30}
      />
    </div>
  )
}

export default MoneyBag