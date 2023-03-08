import React from "react";
import { gql, useQuery } from "@apollo/client";
import BooksRow from "./BooksRow";

const GET_BOOKS = gql`
  query {
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

export default function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (error) {
    return <>Error!</>;
  }
  if (loading) {
    return <>Books Data Loading... </>;
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
        {data.books.map((record, index) => <BooksRow key={record.id} index={index} bookRecord={record} />)}
      </tbody>
    </table>
  );
}
