import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { FaBookOpen } from "react-icons/fa";
import { ADD_BOOK } from "../mutations/books";
import { GET_BOOKS } from "../queries/books";
import { GET_AUTHORS } from "../queries/authors";
import { Spinner } from "./Spinner";

export default function AddBookModal({ authors = [] }) {
  const [bookName, setBookName] = useState("");
  const [bookYear, setBookYear] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [author, setAuthor] = useState("");

  const [saveBook] = useMutation(ADD_BOOK, {
    variables: {
      name: bookName,
      description: bookDescription,
      yearPublished: bookYear,
      authorId: author
    },
    refetchQueries: [{ query: GET_BOOKS }, { query: GET_AUTHORS }],
  });

  const { data, loading } = useQuery(GET_AUTHORS);

  const cleanState = () => {
    setBookName("");
    setBookYear("");
    setBookDescription("");
    setAuthor("");
  };

  if (loading) { return <Spinner /> }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addBookModal"
      >
        <div className="d-flex align-items-center justify-content-between">
          <FaBookOpen className="icon" />
          <div className="ms-2">Add New Book</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addBookModal"
        tabIndex="-1"
        aria-labelledby="addBookModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addBookModalLabel">
                Add New Book
              </h1>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label forhtml="bookName" className="form-label">
                    Book Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bookName"
                    onChange={(e) => setBookName(e.target.value)}
                    value={bookName}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="yearPublished" className="form-label">
                    Year Published
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="yearPublished"
                    onChange={(e) => setBookYear(e.target.value)}
                    value={bookYear}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="shortDescription" className="form-label">
                    Short Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="shortDescription"
                    onChange={(e) => setBookDescription(e.target.value)}
                    value={bookDescription}
                  />
                </div>

                <label forhtml="authorSelector" className="form-label">
                  Author
                </label>
                <select
                  id="authorSelector"
                  value={author}
                  className="form-select"
                  onChange={(e) => setAuthor(e.target.value)}
                >
                  <option>Select Author from the list</option>
                  {data &&
                    data.authors &&
                    data.authors.map((record) => (
                      <option key={record.id} value={record.id}>
                        {record.name}
                      </option>
                    ))}
                </select>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  saveBook();
                  cleanState();
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
