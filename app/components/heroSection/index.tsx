'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './index.module.css'
import Button from '../layout/button'

const HeroSection = () => {
  const handleScrollToSection = () => {
    const element = document.getElementById('como-elegir')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      className={styles.background}
      aria-labelledby="hero-titulo-principal"
    >
      <div className={styles.imageWrapper} aria-hidden="true">
        <Image
          src="/fondoVerde2.png"
          alt=""
          width={1920}
          height={700}
          priority
          style={{ objectFit: 'contain', objectPosition: 'left' }}
        />
      </div>
      <div className={styles.content}>
        <motion.h1
          id="hero-titulo-principal"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Plantas pensadas para mejorar tus espacios <br /> según la vida que quieras crear
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          Acompañamos decisiones cotidianas a través de las plantas
        </motion.p>
        <motion.div
          className={styles.ctaWrap}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          <Button
            text="Elegí tu planta ideal"
            onClick={handleScrollToSection}
            ariaLabel="Ir a la sección Cómo querés elegir"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection