'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/lib/hooks/useCart'

interface AddToCartButtonProps {
  variantId: string
  title: string
  price: number
  productHandle: string
  image?: string
}

export function AddToCartButton({
  variantId,
  title,
  price,
  productHandle,
  image,
}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = async () => {
    setIsAdding(true)

    try {
      addItem({
        variantId,
        quantity,
        title,
        price,
        productHandle,
        image,
      })

      // Reset form
      setQuantity(1)

      // Show feedback (you could add a toast notification here)
      alert(`✓ ${title} agregado al carrito`)
    } catch (error) {
      console.error('Error adding to cart:', error)
      alert('Error al agregar al carrito')
    } finally {
      setIsAdding(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* Quantity Selector */}
      <div className="flex items-center gap-4 border-2 border-vn-black p-2 w-fit">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
          className="font-bold text-lg w-8 h-8 flex items-center justify-center hover:bg-vn-natural disabled:opacity-50"
        >
          −
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-12 text-center font-mono font-bold bg-transparent border-none focus:outline-none"
        />
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="font-bold text-lg w-8 h-8 flex items-center justify-center hover:bg-vn-natural"
        >
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <Button
        onClick={handleAddToCart}
        disabled={isAdding}
        size="lg"
        className="w-full"
      >
        {isAdding ? 'Agregando...' : 'Agregar al carrito'}
      </Button>

      {/* Message */}
      <p className="font-mono text-xs text-vn-black/60 text-center">
        rico, casero, vegan
      </p>
    </div>
  )
}
