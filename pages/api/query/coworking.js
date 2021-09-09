import gql from "graphql-tag";


export const COWORKING_QUERY = gql`
query Coworkings ($url: String) {
    coworkings (where: {id: $url}) {
        name
        slug
        address
        seater
        startingPrice
        quickInfo
        srcImages
        Timing
        price
        description

        faqs {
            ... on Faq {
                question
                answer
            }
        }

        areas{
            coworkings{
                ... on Coworking {
                    id
                    name
                    seater
                    srcImages
                    areas {
                        area
                    }
                }
            }
        }

        amenities {
            ... on Amenity {
                name
                icon {
                    url
                }
            }
        }
    }
  }
`;