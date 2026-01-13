'use client'

import React from 'react'
import { Planta, seccionesPlantas } from '../../../mockData/plantas'
import { LuChevronDown, LuChevronRight } from 'react-icons/lu'
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

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
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
      
      <div className={styles.filterSection}>
        <button 
          className={styles.filterHeader}
          onClick={() => toggleSection('tamano')}
        >
          <h4 className={styles.filterLabel}>Tamaño</h4>
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

      <div className={styles.filterSection}>
        <button 
          className={styles.filterHeader}
          onClick={() => toggleSection('cuidado')}
        >
          <h4 className={styles.filterLabel}>Cuidado</h4>
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

      <div className={styles.filterSection}>
        <button 
          className={styles.filterHeader}
          onClick={() => toggleSection('luz')}
        >
          <h4 className={styles.filterLabel}>Luz</h4>
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

      <div className={styles.filterSection}>
        <button 
          className={styles.filterHeader}
          onClick={() => toggleSection('petFriendly')}
        >
          <h4 className={styles.filterLabel}>Pet Friendly</h4>
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

      <div className={styles.filterSection}>
        <button 
          className={styles.filterHeader}
          onClick={() => toggleSection('uso')}
        >
          <h4 className={styles.filterLabel}>Uso</h4>
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

      <div className={styles.filterSection}>
        <button 
          className={styles.filterHeader}
          onClick={() => toggleSection('sensacion')}
        >
          <h4 className={styles.filterLabel}>Sensación</h4>
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

      <div className={styles.filterSection}>
        <button 
          className={styles.filterHeader}
          onClick={() => toggleSection('ambiente')}
        >
          <h4 className={styles.filterLabel}>Ambiente</h4>
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

      <button
        className={styles.clearButton}
        onClick={() => setFilters({
          tamano: '',
          cuidado: '',
          luz: '',
          petFriendly: '',
          uso: '',
          sensacion: '',
          ambiente: ''
        })}
      >
        Limpiar filtros
      </button>
    </div>
  )
}

export default Filters
