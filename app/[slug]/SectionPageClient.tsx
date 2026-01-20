'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './page.module.css'
import { Planta, SeccionPlantas } from '../mockData/plantas'
import PlantCard from '../components/layout/plantCard'
import Modal from '../components/layout/modal'
import Separator from '../components/layout/separator'
import Propaganda from '../components/propaganda'

interface SectionPageClientProps {
  seccion: SeccionPlantas
}

const SectionPageClient = ({ seccion }: SectionPageClientProps) => {
  const [plantaSeleccionada, setPlantaSeleccionada] = useState<Planta | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewProduct = (planta: Planta) => {
    setPlantaSeleccionada(planta)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setPlantaSeleccionada(null)
  }

  const handleComprar = () => {
    // TODO: integrar con carrito
  }

  return (
    <>
      <Modal
        planta={plantaSeleccionada}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onComprar={handleComprar}
      />

      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {(seccion.imagenSlug || seccion.imagen) && (
          <div className={styles.heroBanner}>
            <Image
              src={seccion.imagenSlug || seccion.imagen}
              alt={seccion.alt || seccion.nombre}
              fill
              sizes="100vw"
              className={styles.heroBannerImage}
            />
          </div>
        )}
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{seccion.nombre}</h1>
          <p className={styles.descripcion}>{seccion.descripcion}</p>
        </div>
      </motion.div>

      <div className={styles.container}>
        <div className={styles.mainContent}>
          {seccion.categorias.map((categoria) => (
            <section key={categoria.nombre} className={styles.categoriaSection}>
              <h2 className={styles.categoriaTitle}>{categoria.nombre}</h2>
              <div className={styles.plantsRow}>
                {categoria.plantas.map((planta) => (
                  <PlantCard
                    key={planta.id}
                    planta={planta}
                    onViewProduct={handleViewProduct}
                  />
                ))}
              </div>
            </section>
          ))}

          <h3 className={styles.guideText}>
            Todos nuestros productos incluyen maceta y una guía de cuidado
          </h3>
          <Propaganda />
        </div>

        <Separator leftText="Mi hogar es donde" rightText="estén mis plantas" />
      </div>
    </>
  )
}

export default SectionPageClient
