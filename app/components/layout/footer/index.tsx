import Image from 'next/image'
import styles from './index.module.css'

const Footer = () => {
    return (
        <footer>
            <p className={styles.title}>Elegí como queres sentirte</p>
            <div className={styles.footerContainer}>
                <p className={styles.footerText}>© 2026 - Camila Ladner 🌸</p>
                <div className={styles.container}>
                    <Image
                        src="/footer5.png"
                        alt="Ilustración decorativa Herbaria"
                        width={200}
                        height={100}
                        className={styles.image}
                    />
                </div>
                <p className={styles.footerText}>Designed with purpose 💻</p>
            </div>
        </footer>
    )
}

export default Footer