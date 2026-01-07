import styles from './index.module.css'
import OptionCard from '../layout/optionCards'
import { seccionesPlantas } from '../../mockData/plantas'

const Principal = () => {
  // Función para obtener una imagen placeholder (puedes reemplazar con imágenes reales)
  const getImagen = (seccionNombre: string): string => {
    // Por ahora usamos un placeholder, puedes agregar imágenes reales después
    return '/placeholder-plant.jpg'
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¿Cómo querés elegir?</h1>
      <div className={styles.cardsGrid}>
        {seccionesPlantas.map((seccion) => (
          <OptionCard
            key={seccion.nombre}
            titulo={seccion.nombre}
            descripcion={seccion.descripcion}
            imagen={seccion.imagen || getImagen(seccion.nombre)}
            alt={seccion.nombre}
          />
        ))}
      </div>
    </div>
  )
}

export default Principal