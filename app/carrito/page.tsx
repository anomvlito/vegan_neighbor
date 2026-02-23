'use client'

import { useState } from 'react'
import Link from 'next/link'
import { H1, Body, H3 } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/lib/hooks/useCart'

export default function CarritoPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  const handleCheckout = async () => {
    setIsCheckingOut(true)
    // TODO: Integrar con Shopify después
    alert('Checkout será integrado con Shopify pronto')
    setIsCheckingOut(false)
  }

  return (
    <main className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <H1 className="mb-2">Tu Carrito</H1>
        <p className="font-mono text-sm text-vn-black/60 mb-8">
          {items.length} {items.length === 1 ? 'producto' : 'productos'}
        </p>

        {items.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-20 border-2 border-vn-black">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-vn-black/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <H3>Tu carrito está vacío</H3>
            <Body className="text-vn-black/60 mt-4 mb-8">
              Comienza a agregar productos a tu carrito para completar tu compra.
            </Body>
            <Button asChild>
              <Link href="/productos">Explorar Productos</Link>
            </Button>
          </div>
        ) : (
          /* Cart Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.variantId}
                  className="border-2 border-vn-black p-4 flex gap-4"
                >
                  {/* Item Info */}
                  <div className="flex-1">
                    <Link
                      href={`/productos/${item.productHandle}`}
                      className="font-display text-lg font-bold hover:underline"
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="font-mono font-bold">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-2 border-l-2 border-vn-black pl-4">
                    <button
                      onClick={() =>
                        updateQuantity(item.variantId, Math.max(1, item.quantity - 1))
                      }
                      className="w-8 h-8 flex items-center justify-center hover:bg-vn-natural font-bold"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.variantId, parseInt(e.target.value) || 1)
                      }
                      className="w-12 text-center font-mono font-bold bg-transparent border-none focus:outline-none"
                    />
                    <button
                      onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-vn-natural font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right border-l-2 border-vn-black pl-4 min-w-[100px]">
                    <p className="font-mono font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.variantId)}
                      className="font-mono text-xs text-red-600 hover:text-red-700 mt-2"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}

              {/* Clear Cart */}
              <button
                onClick={() => clearCart()}
                className="font-mono text-xs text-vn-black/60 hover:text-vn-black underline"
              >
                Vaciar carrito
              </button>
            </div>

            {/* Summary */}
            <div className="bg-vn-natural border-2 border-vn-black p-6 h-fit space-y-4">
              <H3>Resumen</H3>

              <div className="space-y-2 border-t-2 border-vn-black pt-4">
                <div className="flex justify-between font-mono text-sm">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-mono text-sm">
                  <span>Impuesto (10%):</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t-2 border-vn-black pt-2 flex justify-between font-display text-lg font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {error && (
                <div className="bg-red-100 border-2 border-red-400 text-red-700 p-3 font-mono text-sm">
                  {error}
                </div>
              )}

              <Button
                onClick={handleCheckout}
                disabled={isCheckingOut || items.length === 0}
                size="lg"
                className="w-full"
              >
                {isCheckingOut ? 'Procesando...' : 'Ir al Checkout'}
              </Button>

              <Button asChild variant="outline" className="w-full">
                <Link href="/productos">Continuar comprando</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
