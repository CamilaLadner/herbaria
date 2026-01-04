import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

interface SeparatorProps {
  leftText: string
  rightText: string
}

const Separator: React.FC<SeparatorProps> = ({ leftText, rightText }) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.text} ${styles.leftText}`}>{leftText}</p>
      <div className={styles.imageWrapper}>
        <Image
          src="/HTu eleccion.png"
          alt="Separator"
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <p className={`${styles.text} ${styles.rightText}`}>{rightText}</p>
    </div>
  )
}

export default Separator

