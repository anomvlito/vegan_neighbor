import { H1, Body } from '@/components/ui/Typography'
import { ProductCard } from '@/components/product/ProductCard'

function ProductsGrid() {
  const products = [
    { id: '1', handle: 'empanadas-veganas', title: 'Empanadas Veganas', description: 'Deliciosas empanadas', priceRange: { minVariantPrice: { amount: '12.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '12.99', currencyCode: 'USD' } }, images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Empanadas' } }] }, variants: { edges: [{ node: { id: 'var1', title: 'Default', price: { amount: '12.99', currencyCode: 'USD' }, availableForSale: true } }] } },
    { id: '2', handle: 'hamburguesa-plant-based', title: 'Hamburguesa Plant-Based', description: 'Hamburguesa vegana', priceRange: { minVariantPrice: { amount: '14.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '14.99', currencyCode: 'USD' } }, images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Hamburguesa' } }] }, variants: { edges: [{ node: { id: 'var2', title: 'Default', price: { amount: '14.99', currencyCode: 'USD' }, availableForSale: true } }] } },
    { id: '3', handle: 'pizza-vegana', title: 'Pizza Vegana', description: 'Pizza artesanal', priceRange: { minVariantPrice: { amount: '16.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '16.99', currencyCode: 'USD' } }, images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Pizza' } }] }, variants: { edges: [{ node: { id: 'var3', title: 'Default', price: { amount: '16.99', currencyCode: 'USD' }, availableForSale: true } }] } },
    { id: '4', handle: 'tacos-veganos', title: 'Tacos Veganos', description: 'Tacos deliciosos', priceRange: { minVariantPrice: { amount: '11.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '11.99', currencyCode: 'USD' } }, images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Tacos' } }] }, variants: { edges: [{ node: { id: 'var4', title: 'Default', price: { amount: '11.99', currencyCode: 'USD' }, availableForSale: true } }] } },
  ]

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

export const metadata = {
  title: 'Productos - Vegan Neighbor',
  description: 'Explora nuestro catálogo completo de productos veganos artesanales.',
}

export default function ProductosPage() {
  return (
    <main className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <H1>Productos</H1>
          <Body className="text-vn-black/60 mt-4 max-w-2xl">
            Descubre nuestro catálogo completo de productos veganos artesanales.
          </Body>
        </div>
        <ProductsGrid />
      </div>
    </main>
  )
}
