'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { useCart } from '../../../context/CartContext'
import styles from './index.module.css'

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
  }).format(price)
}

const CartDrawer = () => {
  const {
    lines,
    isOpen,
    closeCart,
    removeLine,
    setQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  const [mounted, setMounted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setShowSuccess(false)
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeCart()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, closeCart])

  const handleFinalizar = () => {
    if (lines.length === 0) return
    setShowSuccess(true)
  }

  const handleSuccessCerrar = () => {
    clearCart()
    setShowSuccess(false)
    closeCart()
  }

  if (!mounted || !isOpen) return null

  const content = (
    <>
      <div
        className={styles.overlay}
        onClick={closeCart}
        aria-hidden
      />
      <aside
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        <header className={styles.header}>
          <h2 id="cart-drawer-title" className={styles.title}>
            Carrito
          </h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeCart}
            aria-label="Cerrar carrito"
          >
            ×
          </button>
        </header>

        <div className={styles.divider} />

        <div className={styles.scrollArea}>
          {lines.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyText}>
                Por el momento no tienes artículos agregados; puedes explorar la
                tienda y agregar las plantas que mejorarán tu energía.
              </p>
            </div>
          ) : (
            <div className={styles.list}>
              {lines.map(({ planta, quantity }) => (
                <div key={planta.id} className={styles.line}>
                  <div className={styles.thumb}>
                    <Image
                      src={planta.imagen}
                      alt=""
                      fill
                      className={styles.thumbImg}
                      sizes="56px"
                    />
                  </div>
                  <div className={styles.lineInfo}>
                    <p className={styles.lineName}>{planta.nombreCotidiano}</p>
                    <span className={styles.linePrice}>
                      {formatPrice(planta.precio)} · unidad
                    </span>
                    <div className={styles.lineActions}>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        aria-label="Quitar una unidad"
                        onClick={() =>
                          setQuantity(planta.id, quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span className={styles.qtyValue}>{quantity}</span>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        aria-label="Añadir una unidad"
                        onClick={() =>
                          setQuantity(planta.id, quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => removeLine(planta.id)}
                      >
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <footer className={styles.footer}>
          <div className={styles.divider} />
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalValue}>
              {formatPrice(totalPrice)}
            </span>
          </div>
          <button
            type="button"
            className={styles.checkoutBtn}
            disabled={totalItems === 0}
            onClick={handleFinalizar}
          >
            Finalizar compra
          </button>
        </footer>

        {showSuccess && (
          <div className={styles.successOverlay}>
            <div className={styles.successCard}>
              <p className={styles.successTitle}>¡Listo!</p>
              <p className={styles.successText}>
                Tu pedido fue registrado correctamente. Gracias por elegir
                Herbaria.
              </p>
              <button
                type="button"
                className={styles.successBtn}
                onClick={handleSuccessCerrar}
              >
                Aceptar
              </button>
            </div>
          </div>
        )}
      </aside>
    </>
  )

  return createPortal(content, document.body)
}

export default CartDrawer
