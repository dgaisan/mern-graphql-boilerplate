import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { FaBookOpen } from "react-icons/fa";
import { ADD_AUTHOR } from "../mutations/authors";
import { GET_AUTHORS } from "../queries/authors";

export default function AddAuthorModal() {
  const [name, setName] = useState("");
  const [yearBorn, setYearBorn] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [saveAuthor] = useMutation(ADD_AUTHOR, {
    variables: {
      name,
      born: yearBorn,
      phone: phone || "",
      email: email || ""
    },
    refetchQueries: [{ query: GET_AUTHORS }],
  });

  return (
    <>
      <button
        type="button"
        className="btn btn-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#addAuthorModal"
      >
        <div className="d-flex align-items-center justify-content-between">
          <FaBookOpen className="icon" />
          <div className="ms-2">Add New Author</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addAuthorModal"
        tabIndex="-1"
        aria-labelledby="addAuthorModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addAuthorModalLabel">
                Add New Author
              </h1>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label forhtml="authorName" className="form-label">
                    Author Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="authorName"
                    onChange={(e) => setName(e.target.value)}
                    required
                    value={name}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="yearBorn" className="form-label">
                    Year Born
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="yearBorn"
                    onChange={(e) => setYearBorn(e.target.value)}
                    value={yearBorn}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mb-3">
                  <label forhtml="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
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
                onClick={() => {
                  saveAuthor();
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
