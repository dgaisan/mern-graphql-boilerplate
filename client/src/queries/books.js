import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      name
      yearPublished
      description
      author {
        name
      }
    }
  }
`;

export const GET_Authors = gql`
  query GetAuthors {
    books {
      id
      name
      born
      books {
        id
        name
      }
    }
  }
`;
