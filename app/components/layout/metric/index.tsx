'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './index.module.css'

const metric = [
    {
        title: '+1.200',
        description: 'plantas entregadas',
    },
    {
        title: '+900',
        description: 'clientes felices',
    },
    {
        title: '+35',
        description: 'variedades disponibles',
    },
]

interface MetricProps {
  variant?: 'aside'
}

const index = ({ variant }: MetricProps) => {
  return (
    <div className={styles.container}>
        <div className={`${styles.metrics} ${variant === 'aside' ? styles.metricsColumn : ''}`}>
            {metric.map((item, i) => (
                <motion.div
                    className={styles.metricsItem}
                    key={item.title}
                    initial={{ y: -40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default index