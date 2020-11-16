import gql from "graphql-tag";

export default gql`
  mutation($postId: ID!) {
    deletePost(postId: $postId)
  }
`;
