import React from "react";
import { useState } from "react";
import ReactEmbedGist from "react-embed-gist";
import "../Gist.css";

const DS = ({ header, gistId }) => {
  const [lang, setLang] = useState({
    gistId: gistId[0],
    text: "JS",
    extension: "js",
  });

  return (
    <div className="container-fluid w-100 h-100 pb-4 d-flex flex-column">
      <div className="container m-4"></div>
      <div className="container w-100">
        <main className="container d-flex justify-content-center">
          <h1 className="h1 mt-4 text-center d-flex text-light justify-content-center mb-4">
            <span className="pe-2" style={{ letterSpacing: ".05rem" }}>
              {header}{" "}
            </span>

            <span>
              <div className="dropdown">
                <button
                  className="btn btn-dark text-info dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {lang.text}
                </button>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="dropdownMenuButton1"
                  style={{ minWidth: "80px !important" }}
                >
                  <li className="m-auto">
                    <button
                      className="dropdown-item text-info bg-dark text-center"
                      onClick={() =>
                        setLang({
                          gistId: gistId[0],
                          text: "JS",
                          extension: "js",
                        })
                      }
                    >
                      JS
                    </button>
                  </li>
                  <li className="m-auto">
                    <button
                      className="dropdown-item text-info bg-dark text-center"
                      onClick={() =>
                        setLang({
                          gistId: gistId[1],
                          text: "C",
                          extension: "c",
                        })
                      }
                    >
                      C
                    </button>
                  </li>
                  <li className="m-auto">
                    <button
                      className="dropdown-item text-info bg-dark text-center"
                      onClick={() =>
                        setLang({
                          gistId: gistId[2],
                          text: "Py",
                          extension: "py",
                        })
                      }
                    >
                      Py
                    </button>
                  </li>
                  <li className="m-auto">
                    <button
                      className="dropdown-item text-info bg-dark text-center"
                      onClick={() =>
                        setLang({
                          gistId: gistId[3],
                          text: "Java",
                          extension: "java",
                        })
                      }
                    >
                      Java
                    </button>
                  </li>
                  <li className="m-auto">
                    <button
                      className="dropdown-item text-info bg-dark text-center"
                      onClick={() =>
                        setLang({
                          gistId: gistId[4],
                          text: "C++",
                          extension: "cpp",
                        })
                      }
                    >
                      C++
                    </button>
                  </li>
                </ul>
              </div>
            </span>
          </h1>
        </main>
        <div className="container">
          <section id={lang.extension}>
            <ReactEmbedGist
              gist={`anzeqar/${lang.gistId}`}
              file={`${header}.${lang.extension}`}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default DS;
