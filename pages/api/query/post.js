import gql from "graphql-tag";

export const POST_QUERY=gql`
query CoBlogs ($url: String) {
    coBlogs (where: {id: $url}) {
        title
        excerpt
        date
        coverImage{
            url
        }
        content
        
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
