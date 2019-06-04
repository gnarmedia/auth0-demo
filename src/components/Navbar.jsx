import React from "react";

export default function Navbar() {
  return (
    <header className="masthead">
      <div className="logo">Auth0 Demo</div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <button>Log In</button>
        </li>
      </ul>
    </header>
  );
}
