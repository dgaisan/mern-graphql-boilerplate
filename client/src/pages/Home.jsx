import React from "react";
import AddAuthorModal from "../components/AddAuthorModal";
import AddBookModal from "../components/AddBookModal";
import Authors from "../components/Authors";
import Books from "../components/Books";

export default function Home() {
  return (
    <>
      <Authors />
      <hr />
      <div className="d-flex justify-content-center m-4">
        <AddBookModal />
        <AddAuthorModal />
      </div>
      <hr />
      <Books />
    </>
  );
}
