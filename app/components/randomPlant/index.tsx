'use client'

import React, { useState } from 'react'
import styles from './index.module.css'
import Button from '../layout/button'
import Modal from '../layout/modal'
import { plantasBase, Planta } from '../../mockData/plantas'

const randomPlant = () => {
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

  const handleComprar = () => {
    // Lógica de compra - puedes implementar lo que necesites aquí
    console.log('Comprar planta:', plantaRecomendada)
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>¿No sabes cuál elegir? </h1>
        <Button text="Te ayudamos a empezar" onClick={handleRecomendacionClick} />
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

export default randomPlant