import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import { BsTruck } from "react-icons/bs";


const propaganda = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h3> Obtené un descuento del 15% en tu primera compra</h3>
            <p>Usando el código: <b> raíces</b>
            <br/> Sumá verde a tu espacio y empezá hoy.</p>

<div className={styles.details}>
            <BsTruck /> <p>Envío gratis hasta el 31 de enero</p>
            </div>
            </div>



            <Image src="/propaganda.png" alt="propaganda" width={300} height={480} />
        </div>
    )
}

export default propaganda
