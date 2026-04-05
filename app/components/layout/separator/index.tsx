'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './index.module.css'

interface SeparatorProps {
  leftText: string
  rightText: string
}

const Separator: React.FC<SeparatorProps> = ({ leftText, rightText }) => {
  return (
    <section
      className={styles.container}
      aria-label="Frase decorativa"
    >
      <motion.p
        className={`${styles.text} ${styles.leftText}`}
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {leftText}
      </motion.p>
      <div className={styles.imageWrapper}>
        <Image
          src="/HTu eleccion.png"
          alt=""
          width={200}
          height={200}
          className={styles.image}
          aria-hidden="true"
        />
      </div>
      <motion.p
        className={`${styles.text} ${styles.rightText}`}
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {rightText}
      </motion.p>
    </section>
  )
}

export default Separator

