import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $description: String!, $yearPublished: String!) {
    addBook(name: $name, description: $description, yearPublished: $yearPublished) {
      id
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(
      id: $id
    ) {
      id
      name
    }
  }
`;