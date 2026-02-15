'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './index.module.css'
import Button from '../layout/button'
import Metric from '../layout/metric'

const HeroSection = () => {
  const handleScrollToSection = () => {
    const element = document.getElementById('como-elegir')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className={styles.background}>
      <Image
        src="/principalBanner.jpg"
        alt="Living room with plants"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.content}>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Plantas pensadas para mejorar tus espacios <br /> según la vida que quieras crear
        </motion.h2>
        <motion.h3
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          Acompañamos decisiones cotidianas a través de las plantas
        </motion.h3>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          <Button text="Elegí tu planta ideal" onClick={handleScrollToSection} />
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection