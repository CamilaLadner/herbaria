import Image from 'next/image'
import styles from './index.module.css'

const Footer = () => {
    return (
        <div>
            <p className={styles.title}>Elegí como queres sentirte</p>
            <div className={styles.footerContainer}>
                <p className={styles.footerText}>© 2026 - Camila Ladner 🌸</p>
                <div className={styles.container}>
                    <Image src="/footer5.png" alt="logo" width={200} height={100} className={styles.image} />
                </div>
                <p className={styles.footerText}>Designed with purpose 💻</p>
            </div>
        </div>
    )
}

export default Footer