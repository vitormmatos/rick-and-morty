import { gql } from 'apollo-angular'

function getCharacters(pageNumber: number){ 
  return gql`
  query {
    characters(page: ${pageNumber} ) {
      results {
        name
        species
        status
        image
        origin {
          id
          name
        }
        location {
          id
          name
        }
      }
    }
  }
`
}

export { getCharacters }
