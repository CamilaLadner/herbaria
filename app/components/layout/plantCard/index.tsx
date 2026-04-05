import React from 'react'
import Image from 'next/image'
import { Planta } from '../../../mockData/plantas'
import styles from './index.module.css'

interface PlantCardProps {
  planta: Planta
  onViewProduct?: (planta: Planta) => void
}

const PlantCard: React.FC<PlantCardProps> = ({ planta, onViewProduct }) => {
  const handleViewProduct = () => {
    if (onViewProduct) {
      onViewProduct(planta)
    }
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <button
      type="button"
      className={styles.card}
      onClick={handleViewProduct}
      aria-label={`Ver detalles de ${planta.nombreCotidiano}, precio ${formatPrice(planta.precio)}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={planta.imagen}
          alt={planta.nombreCotidiano}
          fill
          className={styles.image}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.nombreCotidiano}>{planta.nombreCotidiano}</p>

        <div className={styles.priceContainer}>
          <span className={styles.price}>{formatPrice(planta.precio)}</span>
        </div>

        <p className={styles.descripcion}>{planta.descripcion}</p>
      </div>
    </button>
  )
}

export default PlantCard
