import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../mutations/books";
import { GET_BOOKS } from "../queries/books";

export default function BooksRow({ bookRecord, index }) {
  const [deleteBook] = useMutation(DELETE_BOOK, {
    variables: { id: bookRecord.id },
    refetchQueries: [{ query: GET_BOOKS }],
  });

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{bookRecord.name}</td>
      <td>{bookRecord.yearPublished}</td>
      <td>{bookRecord.description}</td>
      <td>{bookRecord.author ? bookRecord.author.name : ""}</td>
      <td>
        <button className="btn btn-outline-danger btn-sm" onClick={deleteBook}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
