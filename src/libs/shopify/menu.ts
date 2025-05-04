import { shopifyClient } from './client' // Shopify 클라이언트 임포트 필요

export async function getMenu(handle: string) {
  const query = `
    query getMenu($handle: String!) {
      menu(handle: $handle) {
        items {
          title
          url
        }
      }
    }
  `

  const variables = { handle }

  try {
    const data = await shopifyClient.request(query, variables)
    return data
  } catch (error) {
    console.error('Error fetching menu:', error)
    return {
      menu: {
        items: [],
      },
    }
  }
}
