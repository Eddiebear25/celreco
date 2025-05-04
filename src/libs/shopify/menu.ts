import { shopifyClient } from './client'
import { gql } from 'graphql-request'

export async function getMenu(handle: string) {
  const query = gql`
    query getMenu($handle: String!) {
      menu(handle: $handle) {
        items {
          title
          url
        }
      }
    }
  `;

  try {
    const data = await shopifyClient.request(query, { handle });
    return data;
  } catch (error) {
    console.warn('⚠️ getMenu failed: using fallback empty menu');
    return {
      menu: {
        items: [],
      },
    };
  }
}
