'use client'

import { useState, useCallback } from 'react'
import styles from './page.module.css'
import { plantasBase, Planta } from '../mockData/plantas'
import PlantCard from '../components/layout/plantCard'
import Filters from '../components/layout/filters'

const NuestrosProductos = () => {
  const [filteredPlantas, setFilteredPlantas] = useState<Planta[]>(plantasBase)

  const handleAddToCart = (planta: Planta) => {
    // Lógica para añadir al carrito
    console.log('Añadir al carrito:', planta)
  }

  const handleFilterChange = useCallback((plantas: Planta[]) => {
    setFilteredPlantas(plantas)
  }, [])

  // Dividir las plantas en 3 grupos para las 3 filas
  const plantasPorFila = Math.ceil(filteredPlantas.length / 3)
  const fila1 = filteredPlantas.slice(0, plantasPorFila)
  const fila2 = filteredPlantas.slice(plantasPorFila, plantasPorFila * 2)
  const fila3 = filteredPlantas.slice(plantasPorFila * 2)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Plantar un jardín es creer en el mañana</h1>
      
      <div className={styles.mainContent}>
        <div className={styles.filtersRow}>
          <Filters plantas={plantasBase} onFilterChange={handleFilterChange} />
        </div>

        <div className={styles.plantsSection}>
          {fila1.length > 0 && (
            <div className={styles.plantsRow}>
              {fila1.map((planta) => (
                <PlantCard
                  key={planta.id}
                  planta={planta}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}

          {fila2.length > 0 && (
            <div className={styles.plantsRow}>
              {fila2.map((planta) => (
                <PlantCard
                  key={planta.id}
                  planta={planta}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}

          {fila3.length > 0 && (
            <div className={styles.plantsRow}>
              {fila3.map((planta) => (
                <PlantCard
                  key={planta.id}
                  planta={planta}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}

          {filteredPlantas.length === 0 && (
            <div className={styles.noResults}>
              <p>No se encontraron plantas con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NuestrosProductos