'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { Planta } from '../mockData/plantas'

export type CartLine = { planta: Planta; quantity: number }

type CartContextValue = {
  lines: CartLine[]
  addItem: (planta: Planta) => void
  removeLine: (plantaId: string) => void
  setQuantity: (plantaId: string, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = useCallback((planta: Planta) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.planta.id === planta.id)
      if (i >= 0) {
        const next = [...prev]
        next[i] = { ...next[i], quantity: next[i].quantity + 1 }
        return next
      }
      return [...prev, { planta, quantity: 1 }]
    })
  }, [])

  const removeLine = useCallback((plantaId: string) => {
    setLines((prev) => prev.filter((l) => l.planta.id !== plantaId))
  }, [])

  const setQuantity = useCallback(
    (plantaId: string, quantity: number) => {
      if (quantity < 1) {
        removeLine(plantaId)
        return
      }
      setLines((prev) =>
        prev.map((l) =>
          l.planta.id === plantaId ? { ...l, quantity } : l
        )
      )
    },
    [removeLine]
  )

  const clearCart = useCallback(() => setLines([]), [])

  const totalItems = useMemo(
    () => lines.reduce((s, l) => s + l.quantity, 0),
    [lines]
  )

  const totalPrice = useMemo(
    () => lines.reduce((s, l) => s + l.planta.precio * l.quantity, 0),
    [lines]
  )

  const value = useMemo(
    (): CartContextValue => ({
      lines,
      addItem,
      removeLine,
      setQuantity,
      clearCart,
      isOpen,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((o) => !o),
      totalItems,
      totalPrice,
    }),
    [
      lines,
      addItem,
      removeLine,
      setQuantity,
      clearCart,
      isOpen,
      totalItems,
      totalPrice,
    ]
  )

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart debe usarse dentro de CartProvider')
  }
  return ctx
}
