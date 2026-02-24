import { Button } from '@/components/ui/Button'
import { H1, H2, Body, Subtitle } from '@/components/ui/Typography'
import { ProductCard } from '@/components/product/ProductCard'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const products = [
    {
      id: '1',
      handle: 'empanadas-veganas',
      title: 'Empanadas Veganas',
      description: 'Deliciosas empanadas rellenas de verduras frescas',
      priceRange: { minVariantPrice: { amount: '12.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '12.99', currencyCode: 'USD' } },
      images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Empanadas' } }] },
      variants: { edges: [{ node: { id: 'var1', title: 'Default', price: { amount: '12.99', currencyCode: 'USD' }, availableForSale: true } }] },
    },
    {
      id: '2',
      handle: 'hamburguesa-plant-based',
      title: 'Hamburguesa Plant-Based',
      description: 'Hamburguesa 100% vegana con sabor auténtico',
      priceRange: { minVariantPrice: { amount: '14.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '14.99', currencyCode: 'USD' } },
      images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Hamburguesa' } }] },
      variants: { edges: [{ node: { id: 'var2', title: 'Default', price: { amount: '14.99', currencyCode: 'USD' }, availableForSale: true } }] },
    },
    {
      id: '3',
      handle: 'pizza-vegana',
      title: 'Pizza Vegana',
      description: 'Pizza artesanal con ingredientes 100% veganos',
      priceRange: { minVariantPrice: { amount: '16.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '16.99', currencyCode: 'USD' } },
      images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Pizza' } }] },
      variants: { edges: [{ node: { id: 'var3', title: 'Default', price: { amount: '16.99', currencyCode: 'USD' }, availableForSale: true } }] },
    },
    {
      id: '4',
      handle: 'tacos-veganos',
      title: 'Tacos Veganos',
      description: 'Tacos deliciosos con proteína vegetal',
      priceRange: { minVariantPrice: { amount: '11.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '11.99', currencyCode: 'USD' } },
      images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Tacos' } }] },
      variants: { edges: [{ node: { id: 'var4', title: 'Default', price: { amount: '11.99', currencyCode: 'USD' }, availableForSale: true } }] },
    },
    {
      id: '5',
      handle: 'ensalada-fresca',
      title: 'Ensalada Fresca',
      description: 'Ensalada de verduras frescas y organicas',
      priceRange: { minVariantPrice: { amount: '9.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '9.99', currencyCode: 'USD' } },
      images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Ensalada' } }] },
      variants: { edges: [{ node: { id: 'var5', title: 'Default', price: { amount: '9.99', currencyCode: 'USD' }, availableForSale: true } }] },
    },
    {
      id: '6',
      handle: 'smoothie-verde',
      title: 'Smoothie Verde',
      description: 'Bebida nutritiva con frutas y verduras',
      priceRange: { minVariantPrice: { amount: '7.99', currencyCode: 'USD' }, maxVariantPrice: { amount: '7.99', currencyCode: 'USD' } },
      images: { edges: [{ node: { url: '/assets/VN_logopack/PNG/TRANSPARENTE-AVATAR.png', altText: 'Smoothie' } }] },
      variants: { edges: [{ node: { id: 'var6', title: 'Default', price: { amount: '7.99', currencyCode: 'USD' }, availableForSale: true } }] },
    },
  ]

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

            {/* Right - Hero Image */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-lg overflow-hidden border-2 border-white/20">
                <Image
                  src="/images/palillo.jpg"
                  alt="Vegan Neighbor - rico, casero, vegan"
                  width={600}
                  height={480}
                  className="w-full h-auto object-cover animate-scale-in"
                  priority
                />
              </div>
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

      {/* Lifestyle Section */}
      <section className="bg-vn-black text-vn-white py-20 md:py-32 border-y-4 border-vn-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Subtitle className="text-vn-white/70">
              más que comida
            </Subtitle>
            <H2 className="text-vn-white mt-2">Estilo Vegan</H2>
            <Body className="text-vn-white/60 max-w-xl mx-auto mt-4">
              Llevamos nuestra convicción con orgullo. Cada producto, cada prenda,
              cada detalle refleja quiénes somos.
            </Body>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Polera */}
            <div className="group relative overflow-hidden">
              <Image
                src="/images/polera.jpg"
                alt="Polera Vegan Neighbor"
                width={600}
                height={480}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-display text-xl tracking-wider uppercase">Polera VN</p>
                <p className="font-mono text-xs text-white/70 tracking-wider">Próximamente</p>
              </div>
            </div>

            {/* Tote */}
            <div className="group relative overflow-hidden">
              <Image
                src="/images/tote.jpg"
                alt="Tote bag Vegan Neighbor - rico, casero, vegan"
                width={600}
                height={720}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-display text-xl tracking-wider uppercase">Tote Bag VN</p>
                <p className="font-mono text-xs text-white/70 tracking-wider">Próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-vn-natural py-20 md:py-32 border-y-4 border-vn-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
            {/* Image */}
            <div className="hidden md:block">
              <Image
                src="/images/03util.jpg"
                alt="Señalética Vegan Neighbor - rico, casero, vegan"
                width={400}
                height={500}
                className="w-full h-auto object-cover border-2 border-vn-black"
              />
            </div>

            {/* Content */}
            <div className="md:col-span-3">
              <H2 className="mb-12">Nuestra filosofía</H2>

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
