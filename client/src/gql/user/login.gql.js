import gql from "graphql-tag";

export default gql`
  mutation LOGIN($password: String!, $username: String!) {
    login(username: $username, password: $password) {
      id
      username
      fullName
      token
      picture
    }
  }
`;
