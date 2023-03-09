import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { GET_AUTHOR } from "../queries/authors";

export default function Author() {
  const { authorId } = useParams();
  const { loading, error, data } = useQuery(GET_AUTHOR, {
    variables: { id: authorId },
  });

  if (error) {
    return <span>Unable to load this Author</span>;
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{data.author.name}</h5>
        <p className="card-text">{`${data.author.name} was born is ${data.author.born}`}</p>
        {data.author.phone && (<p className="card-text">Phone: {data.author.phone}</p>)}
        {data.author.email && (<p className="card-text">Email: {data.author.email}</p>)}
      </div>
      {data.author.books && (
        <ul className="list-group list-group-flush">
          {data.author.books.map((book, index) => (
            <li key={index} className="list-group-item">{book.name}</li>
          ))}
        </ul>
      )}
      <div className="card-body">
        <Link to={"/"} className="btn btn-secondary">
          Go Back
        </Link>
      </div>
    </div>
  );
}
