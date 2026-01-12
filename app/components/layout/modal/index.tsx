'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Planta } from '../../../mockData/plantas'
import Button from '../button'
import styles from './index.module.css'
import { LuDog } from 'react-icons/lu'
import { PiPlantLight, PiSunDimThin } from 'react-icons/pi'
import { GiPlantWatering } from 'react-icons/gi'

interface ModalProps {
  planta: Planta | null
  isOpen: boolean
  onClose: () => void
  onComprar?: () => void
}

const Modal: React.FC<ModalProps> = ({ planta, isOpen, onClose, onComprar }) => {
  // Cerrar modal con ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !planta) return null

  const handleComprar = () => {
    if (onComprar) {
      onComprar()
    }
    onClose()
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar modal">
          ×
        </button>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src={planta.imagen}
              alt={planta.nombreCotidiano}
              fill
              className={styles.image}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className={styles.info}>
            <h2 className={styles.nombreCotidiano}>{planta.nombreCotidiano}</h2>
            <p className={styles.nombreProfesional}>{planta.nombreProfesional}</p>

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
              {planta.petFriendly && (
                <div className={styles.detailItem}>
                  <LuDog className={styles.detailIcon} />
                  <span className={styles.detailValue}>Pet Friendly</span>
                </div>
              )}
            </div>

            {planta.caracteristicas.length > 0 && (
              <div className={styles.caracteristicas}>
                <h3 className={styles.caracteristicasTitle}>Características:</h3>
                {planta.caracteristicas.map((caracteristica, index) => (
                  <div key={index}>{caracteristica}</div>
                ))}
              </div>
            )}

            <div className={styles.buttonContainer}>
              <Button
                text="Añadir al carrito"
                onClick={handleComprar}
                className={styles.comprarButton}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
