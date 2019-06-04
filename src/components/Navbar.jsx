import React from "react";

export default function Navbar({ login }) {
  return (
    <header className="masthead">
      <div className="logo">Auth0 Demo</div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <button onClick={login}>Log In</button>
        </li>
      </ul>
    </header>
  );
}
