'use client'

import React, { useState } from 'react'
import styles from './index.module.css'
import Button from '../layout/button'
import Modal from '../layout/modal'
import { plantasBase, Planta } from '../../mockData/plantas'
import { useCart } from '../../context/CartContext'

const randomPlant = () => {
  const { addItem } = useCart()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [plantaRecomendada, setPlantaRecomendada] = useState<Planta | null>(null)

  const obtenerPlantaAleatoria = (): Planta => {
    const indiceAleatorio = Math.floor(Math.random() * plantasBase.length)
    return plantasBase[indiceAleatorio]
  }

  const handleRecomendacionClick = () => {
    const plantaAleatoria = obtenerPlantaAleatoria()
    setPlantaRecomendada(plantaAleatoria)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setPlantaRecomendada(null)
  }

  const handleComprar = (planta: Planta) => {
    addItem(planta)
  }

  return (
    <>
      <section
        className={styles.container}
        aria-labelledby="titulo-planta-aleatoria"
      >
        <h2 id="titulo-planta-aleatoria" className={styles.title}>
          ¿No sabes cuál elegir?
        </h2>
        <Button
          text="Te ayudamos a empezar"
          onClick={handleRecomendacionClick}
          ariaLabel="Obtener una recomendación de planta al azar"
        />
      </section>

      <Modal
        planta={plantaRecomendada}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onComprar={handleComprar}
      />
    </>
  )
}

export default randomPlant