import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      id
      name
      born
    }
  }
`;

export const GET_AUTHOR = gql`
  query GetAuthors($id: ID!) {
    author(id: $id) {
      id
      name
      born
      email
      phone
      books {
        id,
        name
      }
    }
  }
`;