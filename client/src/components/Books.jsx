import React from "react";
import { useQuery } from "@apollo/client";
import BooksRow from "./BooksRow";
import { Spinner } from "./Spinner";
import { GET_BOOKS } from "../queries/books";


export default function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (error) {
    return <>Error!</>;
  }
  if (loading) {
    return <Spinner />;
  }

  console.log(data);

  return (
    <table className="table table-striped mt-8">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Year Published</th>
          <th scope="col">Description</th>
          <th scope="col">Author</th>
        </tr>
      </thead>
      <tbody>
        {data.books.map((record, index) => (
          <BooksRow key={record.id} index={index} bookRecord={record} />
        ))}
      </tbody>
    </table>
  );
}
