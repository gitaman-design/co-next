import gql from "graphql-tag";

const BLOG_QUERY = gql`
  query VoBlogs {
    voBlogs {
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
