import React from "react";
import { FaTrash } from "react-icons/fa";

export default function BooksRow({ bookRecord, index }) {
  return (
    <tr>
      <td scope="row">{index + 1}</td>
      <td>{bookRecord.name}</td>
      <td>{bookRecord.yearPublished}</td>
      <td>{bookRecord.description}</td>
      <td>{bookRecord.author.name}</td>
      <td>
        <button className="btn btn-outline-danger btn-sm"><FaTrash /></button>
      </td>
      
    </tr>
  );
}
