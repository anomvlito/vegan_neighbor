export interface Money {
  amount: string
  currencyCode: string
}

export interface Image {
  url: string
  altText: string
  width?: number
  height?: number
}

export interface ProductVariant {
  id: string
  title: string
  price: Money
  availableForSale: boolean
  image?: Image
}

export interface Product {
  id: string
  handle: string
  title: string
  description: string
  priceRange: {
    minVariantPrice: Money
    maxVariantPrice: Money
  }
  images: {
    edges: Array<{
      node: Image
    }>
  }
  variants: {
    edges: Array<{
      node: ProductVariant
    }>
  }
  featuredImage?: Image
  seo?: {
    title: string
    description: string
  }
}

export interface CartLine {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    price: Money
    product: {
      handle: string
      title: string
    }
  }
}

export interface Cart {
  id: string
  checkoutUrl: string
  cost: {
    subtotal: Money
    total: Money
    tax?: Money
  }
  lines: {
    edges: Array<{
      node: CartLine
    }>
  }
}

export interface Collection {
  id: string
  handle: string
  title: string
  description: string
  image?: Image
  products: {
    edges: Array<{
      node: Product
    }>
  }
}

export interface SearchResult {
  products: {
    edges: Array<{
      node: Product
    }>
  }
}
