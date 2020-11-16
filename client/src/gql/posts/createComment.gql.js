import gql from "graphql-tag";

export default gql`
  mutation($postId: ID!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      id
      body
      username
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;
