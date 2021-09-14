import gql from "graphql-tag";


export const LANDING_QUERY = gql`
query VoLandingPages ($url: String) {
    voLandingPages (where: {id: $url}) {
        title
        slug
        image{
            url
        }
        offer
        document
        process
        faq
        testimonial
        shortDescription
        
        amenities {
            ... on Amenity {
                name
                icon {
                    url
                }
            }
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