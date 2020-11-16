import gql from "graphql-tag";

export default gql`
  query {
    getPosts {
      id
      body
      createdAt
      username

      comments {
        id
        body
        createdAt
        username
      }
      likes {
        id
      }
      likeCount
      commentCount
    }
  }
`;
