import { shopifyFetch } from './index'
import { PRODUCTS_QUERY, PRODUCT_QUERY, SEARCH_PRODUCTS_QUERY } from './queries'
import { Product, Collection } from './types'

export async function getProducts(
  first: number = 12,
  after?: string
): Promise<Product[]> {
  const { data, errors } = await shopifyFetch<{
    products: {
      pageInfo: { hasNextPage: boolean; endCursor: string }
      edges: Array<{ node: Product }>
    }
  }>({
    query: PRODUCTS_QUERY,
    variables: { first, after },
    tags: ['products'],
  })

  if (errors) {
    console.error('Error fetching products:', errors)
    return []
  }

  return data?.products.edges.map((edge) => edge.node) || []
}

export async function getProduct(handle: string): Promise<Product | null> {
  const { data, errors } = await shopifyFetch<{
    productByHandle: Product
  }>({
    query: PRODUCT_QUERY,
    variables: { handle },
    tags: ['products'],
  })

  if (errors) {
    console.error(`Error fetching product ${handle}:`, errors)
    return null
  }

  return data?.productByHandle || null
}

export async function searchProducts(
  query: string,
  first: number = 12
): Promise<Product[]> {
  const { data, errors } = await shopifyFetch<{
    search: {
      edges: Array<{ node: Product }>
    }
  }>({
    query: SEARCH_PRODUCTS_QUERY,
    variables: { query, first },
    tags: ['products'],
  })

  if (errors) {
    console.error(`Error searching products for "${query}":`, errors)
    return []
  }

  return data?.search.edges.map((edge) => edge.node) || []
}

export async function getProductHandles(): Promise<string[]> {
  const products = await getProducts(100)
  return products.map((product) => product.handle)
}
