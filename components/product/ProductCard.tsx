import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/shopify/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images.edges[0]?.node
  const price = product.priceRange.minVariantPrice.amount
  const currency = product.priceRange.minVariantPrice.currencyCode

  return (
    <Link href={`/productos/${product.handle}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative aspect-square bg-vn-natural overflow-hidden border-2 border-vn-black mb-4 group-hover:bg-vn-black transition-colors duration-300">
          {image ? (
            <Image
              src={image.url}
              alt={image.altText || product.title}
              fill
              className="object-cover group-hover:opacity-70 transition-opacity duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-vn-natural">
              <svg
                width="48"
                height="48"
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

        {/* Content */}
        <h3 className="font-display font-bold text-lg uppercase tracking-wider group-hover:underline transition-all">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-mono font-bold text-lg">
            ${parseFloat(price).toFixed(2)}
          </span>
          <span className="font-mono text-xs text-vn-black/60">{currency}</span>
        </div>

        {/* Description Preview */}
        <p className="font-sans text-sm text-vn-black/70 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* CTA */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="inline-block font-mono text-xs font-semibold tracking-widest uppercase border-b-2 border-vn-black pb-1">
            Ver más →
          </div>
        </div>
      </div>
    </Link>
  )
}
