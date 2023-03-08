import React from "react";
import { useQuery } from "@apollo/client";
import { Spinner } from "./Spinner";
import { GET_AUTHORS } from "../queries/authors";

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
      {data.authors.map((record, index) => (
        <div key={record.id} className="card m-1" style={{width: '18rem', cursor: 'pointer'}}>
          <div className="card-body">
            <h5 className="card-title">{record.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{record.born}</h6>
            <p className="card-text">
              {/* {record.name} */}
            </p>
            <a href="#" className="card-link">
              Delete Author
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
