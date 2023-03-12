import { gql } from "@apollo/client";

export const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!, $born: String!, $email: String, $phone: String) {
    addAuthor(name: $name, born: $born, email: $email, phone: $phone) {
      id
    }
  }
`;

export const EDIT_AUTHOR = gql`
  mutation EditAuthor($id: ID!, $name: String, $born: String, $email: String, $phone: String) {
    editAuthor(id: $id, name: $name, born: $born, email: $email, phone: $phone) {
      id
    }
  }
`;

export const DELETE_AUTHOR = gql`
  mutation DeleteAuthor($id: ID!) {
    deleteAuthor(
      id: $id
    ) {
      id
      name
    }
  }
`;