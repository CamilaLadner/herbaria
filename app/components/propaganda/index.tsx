'use client'

import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BsTruck } from "react-icons/bs";


const propaganda = () => {
    return (
        <section className={styles.container} aria-labelledby="titulo-promo-descuento">
            <div className={styles.content}>
            <h3 id="titulo-promo-descuento"> Obtené un descuento del 15% en tu primera compra</h3>
            <p>Usando el código: <b> raíces</b>
            <br/> Sumá verde a tu espacio y empezá hoy.</p>

<div className={styles.details}>
            <BsTruck aria-hidden="true" /> <p>Envío gratis hasta el 31 de enero</p>
            </div>
            </div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
            >
                <Image src="/propaganda.png" alt="" width={300} height={480} />
            </motion.div>
        </section>
    )
}

export default propaganda
