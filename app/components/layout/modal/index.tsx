'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Planta } from '../../../mockData/plantas'
import Button from '../button'
import styles from './index.module.css'

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
                <span className={styles.detailLabel}>Tamaño:</span>
                <span className={styles.detailValue}>{planta.tamano}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Cuidado:</span>
                <span className={styles.detailValue}>{planta.cuidado}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Luz:</span>
                <span className={styles.detailValue}>{planta.luz}</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Pet Friendly:</span>
                <span className={styles.detailValue}>
                  {planta.petFriendly ? 'Sí' : 'No'}
                </span>
              </div>
            </div>

            {planta.caracteristicas.length > 0 && (
              <div className={styles.caracteristicas}>
                <h3 className={styles.caracteristicasTitle}>Características:</h3>
                <ul className={styles.caracteristicasList}>
                  {planta.caracteristicas.map((caracteristica, index) => (
                    <li key={index}>{caracteristica}</li>
                  ))}
                </ul>
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
