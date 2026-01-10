'use client'

import { useState } from 'react'
import styles from './index.module.css'
import OptionCard from '../layout/optionCards'
import { seccionesPlantas } from '../../mockData/plantas'

const Principal = () => {
  // Función para obtener una imagen placeholder (puedes reemplazar con imágenes reales)
  const getImagen = (seccionNombre: string): string => {
    // Por ahora usamos un placeholder, puedes agregar imágenes reales después
    return '/placeholder-plant.jpg'
  }

  // Handler para la recomendación del día (preparado para futuro modal)
  const handleRecomendacionClick = () => {
    // TODO: Implementar modal con la planta recomendada
    console.log('Abrir modal con recomendación del día')
  }

  return (
    <div id="como-elegir" className={styles.container}>
      <h1 className={styles.title}>¿Cómo querés elegir?</h1>
      <div className={styles.cardsGrid}>
        {/* Carta de recomendación del día */}
        
        {seccionesPlantas.map((seccion) => (
          <OptionCard
            key={seccion.nombre}
            titulo={seccion.nombre}
            descripcion={seccion.descripcion}
            imagen={seccion.imagen || getImagen(seccion.nombre)}
            alt={seccion.nombre}
            />
          ))}
          <OptionCard
            titulo="Recomendación del día"
            descripcion="Si no sabés por dónde empezar, esta es una buena opción."
            imagen="/Random.jpeg"
            alt="Recomendación del día"
            onClick={handleRecomendacionClick}
          />
      </div>
    </div>
  )
}

export default Principal