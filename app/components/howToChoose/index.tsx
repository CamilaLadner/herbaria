'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './index.module.css'
import OptionCard from '../layout/optionCards'
import Modal from '../layout/modal'
import { seccionesPlantas, plantasBase, Planta } from '../../mockData/plantas'

const HowToChoose = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [plantaRecomendada, setPlantaRecomendada] = useState<Planta | null>(null)

  // Función para convertir el nombre de la sección a una URL slug
  const construirURL = (nombreSeccion: string): string => {
    return nombreSeccion
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
      .replace(/\s+/g, '-') // Reemplazar espacios con guiones
      .replace(/[^a-z0-9-]/g, '') // Eliminar caracteres especiales
  }

  // Handler para navegar a la sección
  const handleSeccionClick = (nombreSeccion: string) => {
    const url = `/${construirURL(nombreSeccion)}`
    router.push(url)
  }

  // Función para obtener una imagen placeholder (puedes reemplazar con imágenes reales)
  const getImagen = (seccionNombre: string): string => {
    // Por ahora usamos un placeholder, puedes agregar imágenes reales después
    return '/placeholder-plant.jpg'
  }

  // Función para obtener una planta aleatoria
  const obtenerPlantaAleatoria = (): Planta => {
    const indiceAleatorio = Math.floor(Math.random() * plantasBase.length)
    return plantasBase[indiceAleatorio]
  }

  // Handler para la recomendación del día
  const handleRecomendacionClick = () => {
    const plantaAleatoria = obtenerPlantaAleatoria()
    setPlantaRecomendada(plantaAleatoria)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setPlantaRecomendada(null)
  }

  const handleComprar = () => {
    // Lógica de compra - puedes implementar lo que necesites aquí
    console.log('Comprar planta:', plantaRecomendada)
  }

  return (
    <>
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
              onClick={() => handleSeccionClick(seccion.nombre)}
              />
            ))}
            <OptionCard
              titulo="Recomendación aleatoria"
              descripcion="Si no sabés por dónde empezar, esta es una buena opción."
              imagen="/Random.jpeg"
              alt="Recomendación del día"
              onClick={handleRecomendacionClick}
            />
        </div>
      </div>

      <Modal
        planta={plantaRecomendada}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onComprar={handleComprar}
      />
    </>
  )
}

export default HowToChoose