import gql from "graphql-tag";

export const CITIES_QUERY=gql`
query Cities ($url: String) {
    cities (where: {slug: $url}) {
      name
      slug
      description
      about
      image {
        url
      }
      areas {
        area
        slug
        coworkings {
          ... on Coworking {
            id
            name
            seater
            areas {
              area
            }
          }
        }
      }
      coworkings {
        ... on Coworking {
          id
          name
          seater
          slug
          srcImages
          areas {
            area
          }
        }
      }
    }
  }
`;