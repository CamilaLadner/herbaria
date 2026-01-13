import React from 'react'
import Image from 'next/image'
import { Planta } from '../../../mockData/plantas'
import Button from '../button'
import styles from './index.module.css'
import { LuDog } from 'react-icons/lu'
import { PiPlantLight, PiSunDimThin } from 'react-icons/pi'
import { GiPlantWatering } from 'react-icons/gi'
import { MdPalette } from 'react-icons/md'

interface PlantCardProps {
  planta: Planta
  onAddToCart?: (planta: Planta) => void
}

const PlantCard: React.FC<PlantCardProps> = ({ planta, onAddToCart }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(planta)
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
    <div className={styles.card}>
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
        <div className={styles.header}>
          <h3 className={styles.nombreCotidiano}>{planta.nombreCotidiano}</h3>
          <p className={styles.nombreProfesional}>{planta.nombreProfesional}</p>
        </div>

        <div className={styles.priceContainer}>
          <span className={styles.price}>{formatPrice(planta.precio)}</span>
        </div>

        <p className={styles.descripcion}>{planta.descripcion}</p>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <PiPlantLight className={styles.detailIcon} />
            <span className={styles.detailValue}>{planta.tamano}</span>
          </div>
          
          <div className={styles.detailItem}>
            <GiPlantWatering className={styles.detailIcon} />
            <span className={styles.detailValue}>{planta.cuidado}</span>
          </div>
          
          <div className={styles.detailItem}>
            <PiSunDimThin className={styles.detailIcon} />
            <span className={styles.detailValue}>{planta.luz}</span>
          </div>
          
          <div className={styles.detailItem}>
            <MdPalette className={styles.detailIcon} />
            <span className={styles.detailValue}>{planta.color}</span>
          </div>
          
          {planta.petFriendly && (
            <div className={styles.detailItem}>
              <LuDog className={styles.detailIcon} />
              <span className={styles.detailValue}>Pet Friendly</span>
            </div>
          )}
        </div>

        {(planta.uso.length > 0 || planta.sensacion.length > 0) && (
          <div className={styles.usoSensacionContainer}>
            {planta.uso.length > 0 && (
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Uso:</h4>
                <div className={styles.tags}>
                  {planta.uso.map((uso, index) => (
                    <span key={index} className={styles.tag}>{uso}</span>
                  ))}
                </div>
              </div>
            )}

            {planta.sensacion.length > 0 && (
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>Sensación:</h4>
                <div className={styles.tags}>
                  {planta.sensacion.map((sensacion, index) => (
                    <span key={index} className={styles.tag}>{sensacion}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {planta.caracteristicas.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Características:</h4>
            <ul className={styles.caracteristicasList}>
              {planta.caracteristicas.map((caracteristica, index) => (
                <li key={index} className={styles.caracteristica}>
                  {caracteristica}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.buttonContainer}>
          <Button
            text="Añadir al carrito"
            onClick={handleAddToCart}
            className={styles.addToCartButton}
          />
        </div>
      </div>
    </div>
  )
}

export default PlantCard
