const shopifyDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || process.env.SHOPIFY_STORE_DOMAIN
const shopifyToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

if (!shopifyDomain || !shopifyToken) {
  throw new Error('Missing Shopify environment variables')
}

const endpoint = `https://${shopifyDomain}/api/2026-01/graphql.json`

export async function shopifyFetch<T>({
  query,
  variables,
  tags,
}: {
  query: string
  variables?: Record<string, any>
  tags?: string[]
}): Promise<{ data?: T; errors?: Array<{ message: string }> }> {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': shopifyToken!,
      },
      body: JSON.stringify({ query, variables }),
      next: tags ? { tags } : undefined,
    })

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`)
    }

    const result = await response.json()

    if (result.errors) {
      console.error('Shopify GraphQL errors:', result.errors)
      return { errors: result.errors }
    }

    return { data: result.data }
  } catch (error) {
    console.error('Shopify fetch error:', error)
    throw error
  }
}
