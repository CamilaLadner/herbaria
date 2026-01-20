'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { Planta } from '../../../mockData/plantas'
import styles from './index.module.css'
import { LuDog, LuShoppingCart } from 'react-icons/lu'
import { PiPlantLight, PiSunDimThin } from 'react-icons/pi'
import { GiPlantWatering } from 'react-icons/gi'

interface ModalProps {
  planta: Planta | null
  isOpen: boolean
  onClose: () => void
  onComprar?: () => void
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  }).format(price)
}

/** Obtiene la ruta de la imagen sin fondo en /public/sinFondo (ej. /plants/X.jpg → /sinFondo/X-removebg-preview.png) */
const getImagenSinFondo = (imagen: string): string => {
  const nombre = imagen.replace(/^.*\//, '').replace(/\.(jpe?g|png|webp|gif)$/i, '')
  return `/sinFondo/${nombre}-removebg-preview.png`
}

const Modal: React.FC<ModalProps> = ({ planta, isOpen, onClose, onComprar }) => {
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
          <div className={styles.info}>
            <h2 className={styles.nombreCotidiano}>{planta.nombreCotidiano.toUpperCase()}</h2>
            <p className={styles.nombreProfesional}>{planta.nombreProfesional}</p>
            <p className={styles.descripcion}>{planta.descripcion}</p>

            <div className={styles.tagsBlock}>
              {planta.uso.length > 0 && (
                <div className={styles.tagsGroup}>
                  <span className={styles.tagsLabel}>Uso</span>
                  <div className={styles.tags}>
                    {planta.uso.map((u, i) => (
                      <span key={i} className={styles.tag}>{u}</span>
                    ))}
                  </div>
                </div>
              )}
              {planta.sensacion.length > 0 && (
                <div className={styles.tagsGroup}>
                  <span className={styles.tagsLabel}>Sensación</span>
                  <div className={styles.tags}>
                    {planta.sensacion.map((s, i) => (
                      <span key={i} className={styles.tag}>{s}</span>
                    ))}
                  </div>
                </div>
              )}
              {planta.caracteristicas.length > 0 && (
                <div className={styles.tagsGroup}>
                  <span className={styles.tagsLabel}>Características</span>
                  <div className={styles.tags}>
                    {planta.caracteristicas.map((caracteristica, index) => (
                      <span key={index} className={styles.tag}>{caracteristica}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className={styles.precio}>{formatPrice(planta.precio)}</div>

            <div className={styles.buttonContainer}>
              <button type="button" onClick={handleComprar} className={styles.comprarButton} aria-label="Añadir al carrito">
                <LuShoppingCart className={styles.comprarButtonIcon} aria-hidden />
              </button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <Image
              src={getImagenSinFondo(planta.imagen)}
              alt={planta.nombreCotidiano}
              fill
              className={styles.image}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <PiPlantLight className={styles.detailIcon} />
            <div className={styles.detailText}>
              <span className={styles.detailLabel}>Tamaño</span>
              <span className={styles.detailValue}>{planta.tamano}</span>
            </div>
          </div>
          <div className={styles.detailItem}>
            <GiPlantWatering className={styles.detailIcon} />
            <div className={styles.detailText}>
              <span className={styles.detailLabel}>Cuidado</span>
              <span className={styles.detailValue}>{planta.cuidado}</span>
            </div>
          </div>
          <div className={styles.detailItem}>
            <PiSunDimThin className={styles.detailIcon} />
            <div className={styles.detailText}>
              <span className={styles.detailLabel}>Luz</span>
              <span className={styles.detailValue}>{planta.luz}</span>
            </div>
          </div>
          <div className={styles.detailItem}>
            <LuDog className={styles.detailIcon} />
            <div className={styles.detailText}>
              <span className={styles.detailLabel}>Pet Friendly</span>
              <span className={styles.detailValue}>{planta.petFriendly ? 'Sí' : 'No'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
