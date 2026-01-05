import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'

interface OptionCardProps {
  titulo: string
  descripcion: string
  imagen: string
  alt?: string
  className?: string
  onClick?: () => void
}

const OptionCard: React.FC<OptionCardProps> = ({ 
  titulo, 
  descripcion, 
  imagen, 
  alt,
  className,
  onClick 
}) => {
  return (
    <div 
      className={`${styles.card} ${className || ''}`}
      onClick={onClick}
    >
      <div className={styles.imageContainer}>
        <Image
          src={imagen}
          alt={alt || titulo}
          fill
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
      </div>
    </div>
  )
}

export default OptionCard

