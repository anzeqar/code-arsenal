import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [index, setIndex] = useState("Index");
  const toggleIndex = () => {
    if (index === "Index") setIndex("Close");
    else setIndex("Index");
  };
  return (
    <div>
      <div
        className="offcanvas offcanvas-start w-auto bg-dark text-light"
        tabIndex="-1"
        id="offcanvas"
        data-bs-keyboard="false"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header">
          <h1 className="h1 pe-4"> Index</h1>
        </div>
        <div className="offcanvas-body px-0">
          <ul
            className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start "
            id="menu"
          >
            <li className="nav-item">
              <span className="nav-link h4 text-warning">Data Structures</span>
              <ul
                className="pe-3"
                style={{ listStyleType: "none", lineHeight: "2rem" }}
              >
                <li
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas"
                  className="text-info text-decoration-none"
                  onClick={toggleIndex}
                >
                  <Link to="/stack" className="text-info text-decoration-none">
                    Stack
                  </Link>
                </li>
                <li
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas"
                  className="text-info text-decoration-none"
                  onClick={toggleIndex}
                >
                  <Link to="#" className="text-secondary text-decoration-none">
                    To be Added...
                  </Link>
                </li>
              </ul>
            </li>
            <hr />
            <li className="nav-item">
              <span className="nav-link h4 text-warning">Algorithms</span>
              <ul
                className="pe-3"
                style={{ listStyleType: "none", lineHeight: "2rem" }}
              >
                <li
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvas"
                  className="text-info text-decoration-none"
                  onClick={toggleIndex}
                >
                  <Link
                    to="#"
                    className="text-secondary   text-decoration-none"
                  >
                    To be Added...
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark sticky fixed-top position-fixed bg-dark">
        <div className="container-fluid">
          <Link to="/code-arsenal/" className="navbar-brand">
            {" "}
            <span>Code Arsenal</span>
          </Link>
          <div className="d-flex">
            <button
              className="btn btn-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              onClick={toggleIndex}
            >
              {index}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
