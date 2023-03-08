import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { FaBookOpen } from "react-icons/fa";
import { ADD_BOOK } from "../mutations/books";
import { GET_BOOKS } from "../queries/books";

export default function AddBookModal() {
  const [bookName, setBookName] = useState("");
  const [bookYear, setBookYear] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  
  const [saveBook] = useMutation(ADD_BOOK, {
    variables: {name: bookName, description: bookDescription, yearPublished: bookYear},
    refetchQueries: [{query: GET_BOOKS}]
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addBookModal"
      >
        <div className="d-flex align-items-center justify-content-between">
          <FaBookOpen className="icon"/>
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
                onClick={() => { saveBook(); }}
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
