import gql from "graphql-tag";


export const RESOURCES_QUERY = gql`
query CoBlogs {
    coBlogs {
        id
        title
        excerpt
        date
        slug
        coverImage{
            url
        }
        
        authors {
            ... on Author {
                name
                profilePic {
                    url
                }
            }
        }
    }
  }
`;