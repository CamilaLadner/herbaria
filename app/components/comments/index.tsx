import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'

const comments = [
    {
        id: 1,
        name: 'Carolina',
        comment: 'Excelente servicio, la planta llegó en perfectas condiciones.',
        image: '/comments/carolina.jpg',
    },
    {
        id: 2,
        name: 'María',
        comment: 'La planta es hermosa, cambia totalmente mi espacio! Me ayuda a relajarme luego de un dia duro.',
        image: '/comments/maria.jpg',
    },
    {
        id: 3,
        name: 'Nicolás',
        comment: 'Gracias a la planta, mi espacio se siente mas acogedor y además mi gato la ama!.',
        image: '/comments/nicolas.jpg',
    },
]

const Stars = () => (
    <div className={styles.stars} role="img" aria-label="Calificación: 5 de 5 estrellas">
        <span aria-hidden="true">★★★★★</span>
    </div>
)

const Comments = () => {
  return (
    <section className={styles.commentsContainer} aria-labelledby="titulo-testimonios">
        <h2 id="titulo-testimonios" className="visually-hidden">
            Opiniones de clientas y clientes
        </h2>
        {comments.map((comment) => (
            <article className={styles.comment} key={comment.id}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={comment.image}
                        alt={`Foto de ${comment.name}`}
                        width={80}
                        height={80}
                        className={styles.commentImage}
                    />
                </div>
                <div className={styles.content}>
                    <h3>{comment.name}</h3>
                    <blockquote className={styles.blockquote}>
                        <p>{comment.comment}</p>
                    </blockquote>
                    <Stars />
                </div>
            </article>
        ))}
    </section>
  )
}

export default Comments

