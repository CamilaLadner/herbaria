'use client'

import Image from 'next/image'
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
    <div className={styles.background}>
      <Image
        src="/herosection1.jpg"
        alt="Living room with plants"
        fill
        priority
        style={{ objectFit: 'cover' }}
      />
      <div className={styles.content}>
        <h2> Plantas pensadas para mejorar tus espacios según la vida que quieras crear</h2>
        <h3>Acompañamos decisiones cotidianas a través de las plantas </h3>
        <Button text="Elegí tu planta ideal" onClick={handleScrollToSection} />
      </div>
    </div>
  )
}

export default HeroSection