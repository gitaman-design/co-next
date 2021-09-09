import gql from "graphql-tag";

export const AREA_QUERY=gql`
query Areas ($url: String) {
    areas (where: {id: $url}) {
        id
      area
      slug
      description
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
