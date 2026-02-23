import { Suspense } from 'react'
import { H1, Body } from '@/components/ui/Typography'
import { ProductCard } from '@/components/product/ProductCard'
import { getProducts } from '@/lib/shopify/products'

async function ProductsGrid() {
  const products = await getProducts(24)

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="font-mono text-sm text-vn-black/60">
          No hay productos disponibles en este momento
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="space-y-4 animate-pulse">
          <div className="aspect-square bg-vn-natural rounded" />
          <div className="h-4 bg-vn-natural rounded w-3/4" />
          <div className="h-4 bg-vn-natural rounded w-1/2" />
        </div>
      ))}
    </div>
  )
}

export const metadata = {
  title: 'Productos - Vegan Neighbor',
  description: 'Explora nuestro catálogo completo de productos veganos artesanales.',
}

export default function ProductosPage() {
  return (
    <main className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <H1>Productos</H1>
          <Body className="text-vn-black/60 mt-4 max-w-2xl">
            Descubre nuestro catálogo completo de productos veganos artesanales.
            rico, casero, vegan - cada producto hecho con convicción.
          </Body>
        </div>

        {/* Products Grid */}
        <Suspense fallback={<ProductsSkeleton />}>
          <ProductsGrid />
        </Suspense>
      </div>
    </main>
  )
}
