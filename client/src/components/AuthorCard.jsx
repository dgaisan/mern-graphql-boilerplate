import { useMutation } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DELETE_AUTHOR } from "../mutations/authors";
import { GET_AUTHORS } from "../queries/authors";

export default function AuthorCard({ author }) {
  const navigate = useNavigate();
  const [deleteAuthor] = useMutation(DELETE_AUTHOR, {
    variables: { id: author.id },
    refetchQueries: [{ query: GET_AUTHORS }],
  });

  return (
    <div
      key={author.id}
      className="card m-1"
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={() => navigate(`/author/${author.id}`)}
    >
      <div className="card-body">
        <h5 className="card-title">{author.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{author.born}</h6>
        <p className="card-text">{/* {record.name} */}</p>
        <div
          className="btn btn-outline-danger"
          onClick={(e) => {
            e.stopPropagation();
            deleteAuthor();
          }}
        >
          Delete Author
        </div>
      </div>
    </div>
  );
}
