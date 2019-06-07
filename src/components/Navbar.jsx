import React from "react";

export default function Navbar({ isAuthenticated, login, logout }) {
  return (
    <header className="navbar">
      <section className="navbar-section">
        <div className="navbar-brand">Auth0 Demo</div>
      </section>
      <section className="navbar-section">
        <a className="btn btn-lg mr-2" href="/">
          Home
        </a>
        {isAuthenticated ? (
          <button className="btn btn-primary btn-lg " onClick={logout}>
            Log Out
          </button>
        ) : (
          <button className="btn btn-primary btn-lg " onClick={login}>
            Log In
          </button>
        )}
      </section>
    </header>
  );
}
