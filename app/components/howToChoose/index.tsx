'use client'

import { useRouter } from 'next/navigation'
import styles from './index.module.css'
import OptionCard from '../layout/optionCards'
import { seccionesPlantas } from '../../mockData/plantas'
import { nombreSeccionToSlug } from '../../lib/slug'

const HowToChoose = () => {
  const router = useRouter()

  const handleSeccionClick = (nombreSeccion: string) => {
    router.push(`/${nombreSeccionToSlug(nombreSeccion)}`)
  }

  // Función para obtener una imagen placeholder (puedes reemplazar con imágenes reales)
  const getImagen = (seccionNombre: string): string => {
    // Por ahora usamos un placeholder, puedes agregar imágenes reales después
    return '/placeholder-plant.jpg'
  }

  return (
    <section
      id="como-elegir"
      className={styles.container}
      aria-labelledby="titulo-como-elegir"
    >
      <h2 id="titulo-como-elegir" className={styles.title}>
        ¿Cómo querés elegir?
      </h2>
      <div className={styles.cardsGrid}>
        {seccionesPlantas.map((seccion) => (
          <OptionCard
            key={seccion.nombre}
            titulo={seccion.nombre}
            descripcion={seccion.descripcion}
            imagen={seccion.imagen || getImagen(seccion.nombre)}
            alt={seccion.nombre}
            onClick={() => handleSeccionClick(seccion.nombre)}
          />
        ))}
      </div>
    </section>
  )
}

export default HowToChoose