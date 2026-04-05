'use client'

import React from 'react'
import { Planta, seccionesPlantas } from '../../../mockData/plantas'
import styles from './index.module.css'

interface FiltersProps {
  plantas: Planta[]
  onFilterChange: (filteredPlantas: Planta[]) => void
}

const Filters: React.FC<FiltersProps> = ({ plantas, onFilterChange }) => {
  const [filters, setFilters] = React.useState({
    tamano: '',
    cuidado: '',
    luz: '',
    petFriendly: '',
    uso: '',
    sensacion: '',
    ambiente: ''
  })

  const filteredPlantas = React.useMemo(() => {
    let filtered = [...plantas]

    if (filters.tamano) {
      filtered = filtered.filter(p => p.tamano === filters.tamano)
    }

    if (filters.cuidado) {
      filtered = filtered.filter(p => p.cuidado === filters.cuidado)
    }

    if (filters.luz) {
      filtered = filtered.filter(p => p.luz === filters.luz)
    }

    if (filters.petFriendly !== '') {
      const isPetFriendly = filters.petFriendly === 'true'
      filtered = filtered.filter(p => p.petFriendly === isPetFriendly)
    }

    if (filters.uso) {
      filtered = filtered.filter(p => p.uso.includes(filters.uso))
    }

    if (filters.sensacion) {
      filtered = filtered.filter(p => p.sensacion.includes(filters.sensacion))
    }

    if (filters.ambiente) {
      // Obtener la sección de ambientes
      const seccionAmbiente = seccionesPlantas.find(s => s.nombre === 'POR AMBIENTE')
      if (seccionAmbiente) {
        // Encontrar la categoría de ambiente seleccionada
        const categoriaAmbiente = seccionAmbiente.categorias.find(c => c.nombre === filters.ambiente)
        if (categoriaAmbiente) {
          // Filtrar plantas que estén en esa categoría de ambiente
          const idsAmbiente = categoriaAmbiente.plantas.map(p => p.id)
          filtered = filtered.filter(p => idsAmbiente.includes(p.id))
        }
      }
    }

    return filtered
  }, [filters, plantas])

  const onFilterChangeRef = React.useRef(onFilterChange)
  
  React.useEffect(() => {
    onFilterChangeRef.current = onFilterChange
  }, [onFilterChange])

  React.useEffect(() => {
    onFilterChangeRef.current(filteredPlantas)
  }, [filteredPlantas])

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key as keyof typeof prev] === value ? '' : value
    }))
  }

  // Obtener opciones únicas
  const tamanos = Array.from(new Set(plantas.map(p => p.tamano)))
  const cuidados = Array.from(new Set(plantas.map(p => p.cuidado)))
  const luces = Array.from(new Set(plantas.map(p => p.luz)))
  const usos = Array.from(new Set(plantas.flatMap(p => p.uso)))
  const sensaciones = Array.from(new Set(plantas.flatMap(p => p.sensacion)))
  
  // Obtener ambientes de la sección POR AMBIENTE
  const seccionAmbiente = seccionesPlantas.find(s => s.nombre === 'POR AMBIENTE')
  const ambientes = seccionAmbiente ? seccionAmbiente.categorias.map(c => c.nombre) : []

  const totalActivos = Object.values(filters).filter(Boolean).length

  const filterSections: Array<{
    key: keyof typeof filters
    label: string
    options: string[]
  }> = [
    { key: 'tamano', label: 'Tamaño', options: tamanos },
    { key: 'cuidado', label: 'Cuidado', options: cuidados },
    { key: 'luz', label: 'Luz', options: luces },
    { key: 'petFriendly', label: 'Pet Friendly', options: ['true', 'false'] },
    { key: 'uso', label: 'Uso', options: usos },
    { key: 'sensacion', label: 'Sensación', options: sensaciones },
    { key: 'ambiente', label: 'Ambiente', options: ambientes }
  ]

  const getDisplayValue = (key: keyof typeof filters, value: string) => {
    if (key === 'petFriendly') return value === 'true' ? 'Sí' : 'No'
    return value
  }

  const handleClear = () => {
    setFilters({
      tamano: '',
      cuidado: '',
      luz: '',
      petFriendly: '',
      uso: '',
      sensacion: '',
      ambiente: ''
    })
  }

  return (
    <section
      className={styles.filtersContainer}
      aria-labelledby="filters-heading"
    >
      <div className={styles.filtersHeader}>
        <h2 id="filters-heading" className={styles.filtersTitle}>
          ¿Cómo querés elegir?
        </h2>
        <div className={styles.headerActions}>
          <span
            id="filter-results-count"
            className={styles.resultCount}
            aria-live="polite"
            aria-atomic="true"
          >
            {filteredPlantas.length} resultados
          </span>
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
            disabled={totalActivos === 0}
            aria-label="Quitar todos los filtros"
          >
            Limpiar
          </button>
        </div>
      </div>

      {totalActivos > 0 && (
        <div className={styles.activeFilters} role="group" aria-label="Filtros activos">
          {filterSections
            .filter(section => filters[section.key])
            .map(section => (
              <button
                key={section.key}
                type="button"
                className={styles.activeChip}
                onClick={() => handleFilterChange(section.key, filters[section.key])}
                aria-label={`Quitar filtro ${section.label}: ${getDisplayValue(section.key, filters[section.key])}`}
              >
                {section.label}: {getDisplayValue(section.key, filters[section.key])} ×
              </button>
            ))}
        </div>
      )}

      <div className={styles.filtersSections}>
        {filterSections.map(section => (
          <fieldset key={section.key} className={styles.filterSection}>
            <legend className={styles.filterLabel}>{section.label}</legend>
            <div className={styles.filterOptions}>
              {section.options.map(option => {
                const selected = filters[section.key] === option
                return (
                  <button
                    type="button"
                    key={`${section.key}-${option}`}
                    className={`${styles.filterButton} ${selected ? styles.active : ''}`}
                    onClick={() => handleFilterChange(section.key, option)}
                    aria-pressed={selected}
                  >
                    {getDisplayValue(section.key, option)}
                  </button>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>
    </section>
  )
}

export default Filters
