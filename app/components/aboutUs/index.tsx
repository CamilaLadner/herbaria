'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './index.module.css'

const NuestroProyecto = () => {
    return (
        <div id="sobre-nosotros" className={styles.container}>

            <div className={styles.imagesContainer}>
                <motion.div
                    className={styles.section}
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h3 className={styles.title}>Nuestra visión</h3>
                    <Image src="/nuestroProyecto/quienesSomos1.jpeg" alt="Quienes Somos" width={350} height={450} className={styles.image} />
                    <p> En Herbaria creemos que cada planta puede aportar algo especial: calma, frescura, energía o simplemente la sensación de estar mejor en un espacio. <br /><br />
                        Queremos que cada persona pueda descubrir qué transmite cada planta y elegir aquella que mejor acompañe su momento, su hogar y su forma de vivir. </p>
                </motion.div>

                <motion.div
                    className={styles.section}
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p> Ofrecemos plantas listas para disfrutar.
                        <br /><br />
                        Las recibís en tu casa, con maceta incluida y una guía simple de cuidado
                        <br /><br />
                        Porque queremos que disfrutar de una planta sea simple, agradable y sin complicaciones. </p>
                    <Image src="/nuestroProyecto/packagin.png" alt="Packaging Herbaria" width={350} height={450} className={styles.image} />
                    <h3 className={styles.title}>Nuestro aporte</h3>
                </motion.div>
            </div>


        </div>
    )
}

export default NuestroProyecto