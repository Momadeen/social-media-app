import gql from "graphql-tag";

export default gql`
  mutation LIKE_POST($postId: ID!) {
    likePost(postId: $postId) {
      id
      likeCount
    }
  }
`;
