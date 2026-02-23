'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  variantId: string
  quantity: number
  title: string
  price: number
  image?: string
  productHandle?: string
}

interface CartState {
  items: CartItem[]
  cartId: string | null
  addItem: (item: CartItem) => void
  removeItem: (variantId: string) => void
  updateQuantity: (variantId: string, quantity: number) => void
  clearCart: () => void
  setCartId: (id: string) => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      cartId: null,

      addItem: (item: CartItem) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.variantId === item.variantId)

          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.variantId === item.variantId
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            }
          }

          return {
            items: [...state.items, item],
          }
        })
      },

      removeItem: (variantId: string) => {
        set((state) => ({
          items: state.items.filter((i) => i.variantId !== variantId),
        }))
      },

      updateQuantity: (variantId: string, quantity: number) => {
        set((state) => {
          if (quantity <= 0) {
            return { items: state.items.filter((i) => i.variantId !== variantId) }
          }

          return {
            items: state.items.map((i) =>
              i.variantId === variantId ? { ...i, quantity } : i
            ),
          }
        })
      },

      clearCart: () => {
        set({ items: [], cartId: null })
      },

      setCartId: (id: string) => {
        set({ cartId: id })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
    }),
    {
      name: 'vegan-neighbor-cart',
    }
  )
)
