import gql from "graphql-tag";

export default gql`
  mutation($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
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
