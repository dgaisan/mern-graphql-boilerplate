import React from "react";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PageNotfound() {
  return (
    <div className="d-flex flex-column p-2 mb-3 justify-content-center align-items-center">
      <h3>404</h3>
      <FaCode size="2em" />
      <p className="lead">Unable to find this page. Go back to <Link to={"/"}>Home Page</Link> </p>
    </div>
  );
}
