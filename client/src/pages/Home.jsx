import React from "react";
import AddBookModal from "../components/AddBookModal";
import Authors from "../components/Authors";
import Books from "../components/Books";

export default function Home() {
  return (
    <>
      <Authors />
      <AddBookModal />
      <Books />
    </>
  );
}
