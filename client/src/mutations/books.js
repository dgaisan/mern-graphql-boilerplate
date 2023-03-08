import { gql } from "@apollo/client";

// export const ADD_BOOK = gql`
//   mutation {
//     addBook(
//       name: "Don Quijote"
//       description: "Picolesque"
//       yearPublished: "1570"
//       authorId: "63feece52e911ee454764688"
//     ) {
//       id
//     }
//   }
// `;

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