import gql from "graphql-tag";

const CITY_QUERY = gql`
  query Cities {
    cities  {
      id
      name
      slug
      description
      image {
        url
      }
      coworkings (limit : 8) {
        ... on Coworking {
          id
          name
          slug
          seater
          srcImages
          areas {
            area
          }
        }
      }
    }
  }
`;

export default CITY_QUERY;
