import React from "react";
import "./Admin.css";

function Headadmin() {
  return (
    <>
      <nav class="navbar navbar-light bg-success">
        <div class="container-fluid">
          <div className="img">
            <a class="navbar-brand" href="administrateur">
              <img
                src="/images/logo.png"
                alt="logo"
                width="200"
                height="100"
              />
            </a>
          </div>
          <div class="dropdown">
            <a
              class="btn dropdown-toggle"
              href="administrateur"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Admin
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item" href="administrateur/profil">
                  Profil
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/logout">
                  Deconnexion
                </a>
              </li>
            </ul>
            <img src="/images/profil.png" alt="" width="50px" heigth="70px" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Headadmin;
