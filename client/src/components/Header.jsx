import React from "react";
import { FaAirbnb } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="navbar bg-light text-primary-emphasis mb-2 p-0">
      <div className="d-flex align-items-center">
        <FaAirbnb className="icon" style={{color: 'red', margin: "0 5 0 45"}} />
        <div>MERN boilerplate</div>
      </div>
    </nav>
  );
}
