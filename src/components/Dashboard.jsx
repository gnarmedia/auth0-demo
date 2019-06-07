import React from "react";

export default function Dashboard({ auth }) {
  const { accessToken, idToken, expiresAt } = auth;

  return (
    <div className="panel">
      <div className="panel-header">
        <div className="panel-title">Credentials</div>
      </div>
      <div className="panel-body">
        <div className="tile">
          <div className="tile-content">
            <p className="tile-title text-bold">accesssToken:</p>
            <p className="tile-subtitle">{accessToken}</p>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            <p className="tile-title text-bold">idToken:</p>
            <p className="tile-subtitle">{idToken}</p>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            <p className="tile-title text-bold">expiresAt:</p>
            <p className="tile-subtitle">{expiresAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
