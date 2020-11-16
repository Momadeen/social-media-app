import gql from "graphql-tag";

export default gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      body
      createdAt
      username
      comments {
        body
        id
        username
        createdAt
      }
      likes {
        id
        username
      }
      likeCount
      commentCount
    }
  }
`;
