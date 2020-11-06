import gql from "graphql-tag";

export default gql`
  mutation CREATE_USER(
    $username: String!
    $password: String!
    $confirmPassword: String!
    $email: String!
    $fullName: String!
  ) {
    register(
      registerInput: {
        username: $username
        password: $password
        confirmPassword: $confirmPassword
        email: $email
        fullName: $fullName
      }
    ) {
      id
      email
      username
      token
    }
  }
`;
