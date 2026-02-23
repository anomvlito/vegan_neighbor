import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { H1, H2, Body, Subtitle } from '@/components/ui/Typography'
import { ProductCard } from '@/components/product/ProductCard'
import { getProducts } from '@/lib/shopify/products'
import Link from 'next/link'

export default async function Home() {
  const products = await getProducts(6)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-vn-black text-vn-white py-20 md:py-32 border-b-4 border-vn-natural">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <Subtitle className="text-vn-white">
                  bienvenida, vecina
                </Subtitle>
                <H1 className="text-vn-white mt-2">
                  rico,<br />
                  casero,<br />
                  vegan
                </H1>
              </div>

              <Body className="text-vn-white/80 max-w-md">
                Descubre nuestros productos veganos artesanales. Cada bocado es
                una convicción: firme, determinada, pero cercana. Para ti, para
                el futuro, y sobre todo, para los animales.
              </Body>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild variant="secondary" size="lg">
                  <Link href="/productos">Ver Productos</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/colecciones">Explorar</Link>
                </Button>
              </div>
            </div>

            {/* Right Logo */}
            <div className="hidden md:flex items-center justify-center">
              <Logo variant="DOSLINEAS" version="POSITIVO" size="xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-12">
            <H2>Destacados</H2>
            <p className="font-mono text-sm tracking-wider text-vn-black/60 mt-2">
              Nuestros productos más populares
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-mono text-sm text-vn-black/60">
                No hay productos disponibles en este momento
              </p>
            </div>
          )}

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/productos">Ver todos los productos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-vn-natural py-20 md:py-32 border-y-4 border-vn-black">
        <div className="max-w-7xl mx-auto px-4">
          <H2 className="mb-12 text-center">Nuestra filosofía</H2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Rico',
                description:
                  'Cada producto está diseñado para deleitar tu paladar. Sabor auténtico, sin compromisos.',
              },
              {
                title: 'Casero',
                description:
                  'Hecho con dedicación y cuidado, como si lo preparáramos en nuestra propia cocina.',
              },
              {
                title: 'Vegan',
                description:
                  'Cero explotación animal. Puro respeto por todos los seres vivos que comparten nuestro planeta.',
              },
            ].map((value, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-display text-2xl font-bold tracking-wider uppercase">
                  {value.title}
                </h3>
                <Body className="text-vn-black/70">{value.description}</Body>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <H2 className="mb-6">¿Listo para unirte?</H2>
          <Body className="mb-8 text-vn-black/70">
            Explora nuestro catálogo completo y descubre nuevas formas de disfrutar
            la comida plant-based.
          </Body>
          <Button asChild size="lg">
            <Link href="/productos">Comenzar a explorar</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
