import React from "react";
import AddAuthorModal from "../components/AddAuthorModal";
import AddBookModal from "../components/AddBookModal";
import Authors from "../components/Authors";
import Books from "../components/Books";

export default function Home() {
  return (
    <>
      <hr />
      <AddAuthorModal />
      <hr />
      <Authors />
      <hr />
      <AddBookModal />
      <hr />
      <Books />
    </>
  );
}
