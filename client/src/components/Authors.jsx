import React from "react";
import { useQuery } from "@apollo/client";
import { Spinner } from "./Spinner";
import { GET_AUTHORS } from "../queries/authors";
import AuthorCard from "./AuthorCard";

export default function Authors() {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  if (error) {
    return <div>Error Loading Authors...</div>;
  }
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container d-flex">
      {data.authors.map((record) => (
        <AuthorCard key={record.id} author={record} />
      ))}
    </div>
  );
}
