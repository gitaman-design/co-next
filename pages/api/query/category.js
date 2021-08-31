import gql from "graphql-tag";

const CITY_QUERY = gql`
  query VoCities {
    voCities {
        id
      name
      slug
      image {
        url
      }
      virtual_offices {
        ... on VirtualOffice {
          id
          name
          slug
          description
          price
          banner {
            url
          }
        }
      }
    }
  }
`;

export default CITY_QUERY;
