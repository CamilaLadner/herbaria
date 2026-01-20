import React from 'react'   
import styles from './index.module.css'

interface announcementBarProps {
    messages: string
}

const messages: announcementBarProps[] = [
    {
        messages: 'Obtené un 15% de descuento en tu primera compra',
    },
    {
        messages: 'Usando el código: RAÍCES',
    },
    {
        messages: 'Envío gratis hasta el 31 de enero',
    },
    {
        messages: 'Una planta para cada momento de tu vida',
    },
]

const announcementBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.track} aria-live="polite">
        {[...messages, ...messages].map((message, i) => (
          <React.Fragment key={`${message.messages}-${i}`}>
            <span className={styles.message}>{message.messages}</span>
            <span className={styles.separator} aria-hidden>•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default announcementBar