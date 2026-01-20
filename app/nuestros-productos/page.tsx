'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import styles from './page.module.css'
import { plantasBase, Planta } from '../mockData/plantas'
import PlantCard from '../components/layout/plantCard'
import Filters from '../components/layout/filters'
import Image from 'next/image'
import Separator from '../components/layout/separator'

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

  const handleAddToCart = (planta: Planta) => {
    // Lógica para añadir al carrito
    console.log('Añadir al carrito:', planta)
  }

  const handleFilterChange = useCallback((plantas: Planta[]) => {
    setFilteredPlantas(plantas)
  }, [])

  return (
    <>
      <motion.div
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
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
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No se encontraron plantas con los filtros seleccionados.</p>
              </div>
            )}
          </div>
        </div>

        <Separator leftText="Mi hogar es donde" rightText="estén mis plantas" />
      </div>
    </>
  )
}

export default NuestrosProductos