import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

const HeroSection = () => {
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

        <button>
          Elegí tu planta ideal
        </button>
      </div>
    </div>
  )
}

export default HeroSection