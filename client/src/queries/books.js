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

