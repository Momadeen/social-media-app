import gql from "graphql-tag";

export default gql`
  mutation CREATE_POST($body: String!) {
    createPost(body: $body) {
      id
      body
      createdAt
      username
      comments {
        body
        id
        username
        picture
      }
    }
  }
`;
