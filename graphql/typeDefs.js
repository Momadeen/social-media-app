const { gql } = require("apollo-server");

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    body: String!
    id: ID!
    createdAt: String!
    username: String!
  }

  type Like {
    createdAt: String!
    username: String!
    id: ID!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    fullName: String!
    picture: String
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    fullName: String!
  }

  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: ID!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
    editProfile(userID: ID!, picture: String, fullName: String): User!
  }

  type Subscription {
    newPost: Post!
  }
`;
