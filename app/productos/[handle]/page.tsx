import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { H1, H3, Body, Tagline } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { AddToCartButton } from '@/components/cart/AddToCartButton'

interface ProductPageProps {
  params: Promise<{
    handle: string
  }>
}

const mockProducts: any = {
  'empanadas-veganas': {
    id: '1', handle: 'empanadas-veganas', title: 'Empanadas Veganas',
    description: 'Deliciosas empanadas rellenas de verduras frescas y proteína vegetal. Hechas con masa casera y relleno artesanal.',
    priceRange: { minVariantPrice: { amount: '12.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '12.99', currencyCode: 'USD' } },
    images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Empanadas' } }] },
    variants: { edges: [{ node: { id: 'var1', title: 'Default', price: { amount: '12.99' }, availableForSale: true } }] }
  },
  'hamburguesa-plant-based': {
    id: '2', handle: 'hamburguesa-plant-based', title: 'Hamburguesa Plant-Based',
    description: 'Hamburguesa 100% vegana con sabor auténtico. Proteína vegetal sabrosa y nutritiva.',
    priceRange: { minVariantPrice: { amount: '14.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '14.99', currencyCode: 'USD' } },
    images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Hamburguesa' } }] },
    variants: { edges: [{ node: { id: 'var2', title: 'Default', price: { amount: '14.99' }, availableForSale: true } }] }
  },
  'pizza-vegana': {
    id: '3', handle: 'pizza-vegana', title: 'Pizza Vegana',
    description: 'Pizza artesanal con ingredientes 100% veganos. Masa casera y toppings frescos.',
    priceRange: { minVariantPrice: { amount: '16.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '16.99', currencyCode: 'USD' } },
    images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Pizza' } }] },
    variants: { edges: [{ node: { id: 'var3', title: 'Default', price: { amount: '16.99' }, availableForSale: true } }] }
  },
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params
  const product = mockProducts[handle]

  if (!product) {
    return { title: 'Producto no encontrado' }
  }

  return {
    title: `${product.title} - Vegan Neighbor`,
    description: product.description,
  }
}

export function generateStaticParams() {
  return Object.keys(mockProducts).map((handle) => ({ handle }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params
  const product = mockProducts[handle]

  if (!product) {
    return <div className="text-center py-20">Producto no encontrado</div>
  }

  const images = product.images.edges.map((edge: any) => edge.node)
  const variant = product.variants.edges[0]?.node
  const price = product.priceRange.minVariantPrice.amount
  const currency = product.priceRange.minVariantPrice.currencyCode

  if (!variant) {
    notFound()
  }

  return (
    <main className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex gap-2 mb-8 font-mono text-sm text-vn-black/60">
          <Link href="/">Inicio</Link>
          <span>/</span>
          <Link href="/productos">Productos</Link>
          <span>/</span>
          <span className="text-vn-black">{product.title}</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Images */}
          <div className="space-y-4">
            {images.length > 0 ? (
              <div className="space-y-4">
                {images.map((image: any, idx: number) => (
                  <div
                    key={idx}
                    className="relative aspect-square bg-vn-natural border-2 border-vn-black overflow-hidden"
                  >
                    <Image
                      src={image.url}
                      alt={image.altText || `${product.title} - Imagen ${idx + 1}`}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="aspect-square bg-vn-natural border-2 border-vn-black flex items-center justify-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-start space-y-6">
            {/* Title & Price */}
            <div>
              <Tagline className="mb-2">rico, casero, vegan</Tagline>
              <H1>{product.title}</H1>
              <div className="flex items-baseline gap-3 mt-4">
                <span className="font-display text-3xl font-bold">
                  ${parseFloat(price).toFixed(2)}
                </span>
                <span className="font-mono text-sm text-vn-black/60">{currency}</span>
              </div>
            </div>

            {/* Availability */}
            <div className="border-2 border-vn-black p-4">
              <p className="font-mono text-sm font-semibold">
                {variant.availableForSale ? (
                  <span className="text-green-600">✓ En Stock</span>
                ) : (
                  <span className="text-red-600">Agotado</span>
                )}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold">Descripción</h3>
              <Body className="text-vn-black/70">{product.description}</Body>
            </div>

            {/* Add to Cart */}
            {variant.availableForSale && (
              <AddToCartButton
                variantId={variant.id}
                title={product.title}
                price={parseFloat(variant.price.amount)}
                productHandle={product.handle}
                image={images[0]?.url}
              />
            )}

            {/* Continue Shopping */}
            <Button asChild variant="outline">
              <Link href="/productos">← Continuar comprando</Link>
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t-2 border-vn-black pt-12">
          <h3 className="font-display text-2xl font-bold mb-6">Detalles del Producto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-sm font-semibold mb-2">SKU</h4>
              <p className="font-mono text-sm text-vn-black/70">{variant.id}</p>
            </div>
            <div>
              <h4 className="font-mono text-sm font-semibold mb-2">Variante</h4>
              <p className="font-mono text-sm text-vn-black/70">{variant.title}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
