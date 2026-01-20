'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import styles from './page.module.css'
import { plantasBase, Planta } from '../mockData/plantas'
import PlantCard from '../components/layout/plantCard'
import Filters from '../components/layout/filters'
import Modal from '../components/layout/modal'
import Image from 'next/image'
import Separator from '../components/layout/separator'
import Propaganda from '../components/propaganda'

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const NuestrosProductos = () => {
  const [filteredPlantas, setFilteredPlantas] = useState<Planta[]>(plantasBase)
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

  const handleFilterChange = useCallback((plantas: Planta[]) => {
    setFilteredPlantas(plantas)
  }, [])

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
        initial={false}
        animate="visible"
        variants={{
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 },
          },
        }}
      >
        <motion.h1 className={styles.title} variants={heroVariants}>
          Plantar un jardín
        </motion.h1>
        <motion.div variants={heroVariants}>
          <Image src="/OurProducts.png" alt="Nuestros Productos" width={400} height={600} className={styles.allPlantsImage} />
        </motion.div>
        <motion.h1 className={styles.title} variants={heroVariants}>
          es creer en el mañana
        </motion.h1>
      </motion.div>

      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.filtersRow}>
            <Filters plantas={plantasBase} onFilterChange={handleFilterChange} />
          </div>

          <div className={styles.plantsSection}>
            {filteredPlantas.length > 0 ? (
              <div className={styles.plantsRow}>
                {filteredPlantas.map((planta) => (
                  <PlantCard
                    key={planta.id}
                    planta={planta}
                    onViewProduct={handleViewProduct}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No se encontraron plantas con los filtros seleccionados.</p>
              </div>
            )}
         <h3 className={styles.guideText}>Todos nuestros productos incluyen maceta y una guía de cuidado</h3> 

            <Propaganda />

          </div>
        </div>

        <Separator leftText="Mi hogar es donde" rightText="estén mis plantas" />
      </div>
    </>
  )
}

export default NuestrosProductos