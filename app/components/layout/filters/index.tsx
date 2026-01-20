'use client'

import React from 'react'
import { Planta, seccionesPlantas } from '../../../mockData/plantas'
import { LuChevronDown, LuChevronRight } from 'react-icons/lu'
import Button from '../button'
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

  const [expandedSections, setExpandedSections] = React.useState({
    tamano: false,
    cuidado: false,
    luz: false,
    petFriendly: false,
    uso: false,
    sensacion: false,
    ambiente: false
  })

  const openSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev =>
      (Object.keys(prev) as (keyof typeof expandedSections)[]).reduce(
        (acc, k) => ({ ...acc, [k]: k === section }),
        {} as typeof expandedSections
      )
    )
  }

  const closeAllSections = () => {
    setExpandedSections(prev =>
      (Object.keys(prev) as (keyof typeof expandedSections)[]).reduce(
        (acc, k) => ({ ...acc, [k]: false }),
        {} as typeof expandedSections
      )
    )
  }

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

  return (
    <div className={styles.filtersContainer}>
      <h3 className={styles.filtersTitle}>¿Cómo queres elegir?</h3>

      <div className={styles.filtersRow}>
      <div
        className={styles.filterSection}
        onMouseEnter={() => openSection('tamano')}
        onMouseLeave={closeAllSections}
      >
        <button type="button" className={styles.filterHeader}>
          <h3 className={styles.filterLabel}>Tamaño</h3>
          {expandedSections.tamano ? (
            <LuChevronDown className={styles.chevronIcon} />
          ) : (
            <LuChevronRight className={styles.chevronIcon} />
          )}
        </button>
        {expandedSections.tamano && (
          <div className={styles.filterOptions}>
            {tamanos.map(tamano => (
              <button
                key={tamano}
                className={`${styles.filterButton} ${filters.tamano === tamano ? styles.active : ''}`}
                onClick={() => handleFilterChange('tamano', tamano)}
              >
                {tamano}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={styles.filterSection}
        onMouseEnter={() => openSection('cuidado')}
        onMouseLeave={closeAllSections}
      >
        <button type="button" className={styles.filterHeader}>
          <h3 className={styles.filterLabel}>Cuidado</h3>
          {expandedSections.cuidado ? (
            <LuChevronDown className={styles.chevronIcon} />
          ) : (
            <LuChevronRight className={styles.chevronIcon} />
          )}
        </button>
        {expandedSections.cuidado && (
          <div className={styles.filterOptions}>
            {cuidados.map(cuidado => (
              <button
                key={cuidado}
                className={`${styles.filterButton} ${filters.cuidado === cuidado ? styles.active : ''}`}
                onClick={() => handleFilterChange('cuidado', cuidado)}
              >
                {cuidado}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={styles.filterSection}
        onMouseEnter={() => openSection('luz')}
        onMouseLeave={closeAllSections}
      >
        <button type="button" className={styles.filterHeader}>
          <h3 className={styles.filterLabel}>Luz</h3>
          {expandedSections.luz ? (
            <LuChevronDown className={styles.chevronIcon} />
          ) : (
            <LuChevronRight className={styles.chevronIcon} />
          )}
        </button>
        {expandedSections.luz && (
          <div className={styles.filterOptions}>
            {luces.map(luz => (
              <button
                key={luz}
                className={`${styles.filterButton} ${filters.luz === luz ? styles.active : ''}`}
                onClick={() => handleFilterChange('luz', luz)}
              >
                {luz}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={styles.filterSection}
        onMouseEnter={() => openSection('petFriendly')}
        onMouseLeave={closeAllSections}
      >
        <button type="button" className={styles.filterHeader}>
          <h3 className={styles.filterLabel}>Pet Friendly</h3>
          {expandedSections.petFriendly ? (
            <LuChevronDown className={styles.chevronIcon} />
          ) : (
            <LuChevronRight className={styles.chevronIcon} />
          )}
        </button>
        {expandedSections.petFriendly && (
          <div className={styles.filterOptions}>
            <button
              className={`${styles.filterButton} ${filters.petFriendly === 'true' ? styles.active : ''}`}
              onClick={() => handleFilterChange('petFriendly', 'true')}
            >
              Sí
            </button>
            <button
              className={`${styles.filterButton} ${filters.petFriendly === 'false' ? styles.active : ''}`}
              onClick={() => handleFilterChange('petFriendly', 'false')}
            >
              No
            </button>
          </div>
        )}
      </div>

      <div
        className={styles.filterSection}
        onMouseEnter={() => openSection('uso')}
        onMouseLeave={closeAllSections}
      >
        <button type="button" className={styles.filterHeader}>
          <h3 className={styles.filterLabel}>Uso</h3>
          {expandedSections.uso ? (
            <LuChevronDown className={styles.chevronIcon} />
          ) : (
            <LuChevronRight className={styles.chevronIcon} />
          )}
        </button>
        {expandedSections.uso && (
          <div className={styles.filterOptions}>
            {usos.map(uso => (
              <button
                key={uso}
                className={`${styles.filterButton} ${filters.uso === uso ? styles.active : ''}`}
                onClick={() => handleFilterChange('uso', uso)}
              >
                {uso}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={styles.filterSection}
        onMouseEnter={() => openSection('sensacion')}
        onMouseLeave={closeAllSections}
      >
        <button type="button" className={styles.filterHeader}>
          <h3 className={styles.filterLabel}>Sensación</h3>
          {expandedSections.sensacion ? (
            <LuChevronDown className={styles.chevronIcon} />
          ) : (
            <LuChevronRight className={styles.chevronIcon} />
          )}
        </button>
        {expandedSections.sensacion && (
          <div className={styles.filterOptions}>
            {sensaciones.map(sensacion => (
              <button
                key={sensacion}
                className={`${styles.filterButton} ${filters.sensacion === sensacion ? styles.active : ''}`}
                onClick={() => handleFilterChange('sensacion', sensacion)}
              >
                {sensacion}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className={styles.filterSection}
        onMouseEnter={() => openSection('ambiente')}
        onMouseLeave={closeAllSections}
      >
        <button type="button" className={styles.filterHeader}>
          <h3 className={styles.filterLabel}>Ambiente</h3>
          {expandedSections.ambiente ? (
            <LuChevronDown className={styles.chevronIcon} />
          ) : (
            <LuChevronRight className={styles.chevronIcon} />
          )}
        </button>
        {expandedSections.ambiente && (
          <div className={styles.filterOptions}>
            {ambientes.map(ambiente => (
              <button
                key={ambiente}
                className={`${styles.filterButton} ${filters.ambiente === ambiente ? styles.active : ''}`}
                onClick={() => handleFilterChange('ambiente', ambiente)}
              >
                {ambiente}
              </button>
            ))}
          </div>
        )}
      </div>

      </div>

      <Button
        text="Limpiar filtros"
        onClick={() => setFilters({
          tamano: '',
          cuidado: '',
          luz: '',
          petFriendly: '',
          uso: '',
          sensacion: '',
          ambiente: ''
        })}
      />
    </div>
  )
}

export default Filters
