'use client'

import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './page.module.css'
import { Planta, SeccionPlantas } from '../mockData/plantas'
import PlantCard from '../components/layout/plantCard'
import Modal from '../components/layout/modal'
import Separator from '../components/layout/separator'
import Propaganda from '../components/propaganda'
import { useCart } from '../context/CartContext'

interface SectionPageClientProps {
  seccion: SeccionPlantas
}

const SectionPageClient = ({ seccion }: SectionPageClientProps) => {
  const { addItem } = useCart()
  const [plantaSeleccionada, setPlantaSeleccionada] = useState<Planta | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [indiceCategoria, setIndiceCategoria] = useState(0)

  const categoriaActual = seccion.categorias[indiceCategoria]

  const handleViewProduct = (planta: Planta) => {
    setPlantaSeleccionada(planta)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setPlantaSeleccionada(null)
  }

  const handleComprar = (planta: Planta) => {
    addItem(planta)
  }

  const handleTabKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      const count = seccion.categorias.length
      if (count === 0) return

      const last = count - 1
      let nextIndex: number | null = null

      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault()
          nextIndex = index >= last ? 0 : index + 1
          break
        case 'ArrowLeft':
          e.preventDefault()
          nextIndex = index <= 0 ? last : index - 1
          break
        case 'Home':
          e.preventDefault()
          nextIndex = 0
          break
        case 'End':
          e.preventDefault()
          nextIndex = last
          break
        default:
          return
      }

      if (nextIndex === null) return

      if (nextIndex !== index) {
        setIndiceCategoria(nextIndex)
      }

      requestAnimationFrame(() => {
        document.getElementById(`tab-categoria-${nextIndex}`)?.focus()
      })
    },
    [seccion.categorias.length]
  )

  return (
    <>
      <Modal
        planta={plantaSeleccionada}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onComprar={handleComprar}
      />

      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        aria-labelledby="seccion-hero-titulo"
      >
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.heroAccent} aria-hidden />
            <div className={styles.heroText}>
              <h1 id="seccion-hero-titulo" className={styles.title}>
                {seccion.nombre}
              </h1>
              <p className={styles.descripcion}>{seccion.descripcion}</p>
            </div>
          </div>
          {(seccion.imagenSlug || seccion.imagen) && (
            <div className={styles.heroImageWrap}>
              <Image
                src={seccion.imagenSlug || seccion.imagen}
                alt={seccion.alt || seccion.nombre}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className={styles.heroBannerImage}
              />
            </div>
          )}
        </div>
      </motion.section>

      <div className={styles.container}>
        <div className={styles.mainContent}>
          {seccion.categorias.length > 0 && (
            <>
              <div
                className={styles.tabsRow}
                role="tablist"
                aria-label="Categorías dentro de la sección"
              >
                {seccion.categorias.map((categoria, index) => (
                  <button
                    key={categoria.nombre}
                    type="button"
                    role="tab"
                    id={`tab-categoria-${index}`}
                    aria-selected={indiceCategoria === index}
                    aria-controls="tabpanel-plantas-categoria"
                    tabIndex={indiceCategoria === index ? 0 : -1}
                    className={
                      indiceCategoria === index ? `${styles.tab} ${styles.tabActive}` : styles.tab
                    }
                    onClick={() => setIndiceCategoria(index)}
                    onKeyDown={(e) => handleTabKeyDown(e, index)}
                  >
                    {categoria.nombre}
                  </button>
                ))}
              </div>

              {categoriaActual && (
                <motion.div
                  key={indiceCategoria}
                  id="tabpanel-plantas-categoria"
                  role="tabpanel"
                  aria-labelledby={`tab-categoria-${indiceCategoria}`}
                  className={styles.tabPanel}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className={styles.plantsRow}>
                    {categoriaActual.plantas.map((planta) => (
                      <PlantCard
                        key={planta.id}
                        planta={planta}
                        onViewProduct={handleViewProduct}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </>
          )}

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
