import gql from "graphql-tag";

const BLOG_QUERY = gql`
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

export default BLOG_QUERY;
