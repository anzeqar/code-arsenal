import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListItems from "./ListItems.jsx";

const Navbar = () => {
  const [index, setIndex] = useState("Index");
  const toggleIndex = () => {
    if (index === "Index") setIndex("Close");
    else setIndex("Index");
  };
  const dsDB = [
    { name: "Stack", link: "/stack" },
    // { name: "Queue", link: "/queue" },
    // { name: "Linked List", link: "/linked-list" },
  ];
  const algoDB = [
    // { name: "Linear Search", link: "/linear-search" },
    // { name: "Binary Search", link: "/binary-search" },
    // { name: "Bubble Sort", link: "/bubble-sort" },
  ];

  const [nameDS, setnameDS] = useState(
    dsDB.map((item) => {
      return item.name;
    })
  );
  const [linkDS, setlinkDS] = useState(
    dsDB.map((item) => {
      return item.link;
    })
  );

  const [nameAlgo, setnameAlgo] = useState(
    algoDB.map((item) => {
      return item.name;
    })
  );
  const [linkAlgo, setlinkAlgo] = useState(
    algoDB.map((item) => {
      return item.link;
    })
  );
  const searchFilter = (e) => {
    let searchResultsDS = dsDB.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log("ds:", searchResultsDS);
    if (searchResultsDS.length > 0) {
      let tempNames = [];
      let tempLinks = [];
      searchResultsDS.forEach((item) => {
        tempNames.push(item.name);
        tempLinks.push(item.link);
        setnameDS(tempNames);
        setlinkDS(tempLinks);
      });
    } else {
      setnameDS([]);
      setlinkDS([]);
    }
    let searchResultsAlgo = algoDB.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    console.log("algo:", searchResultsAlgo);
    if (searchResultsAlgo.length > 0) {
      let tempNames = [];
      let tempLinks = [];
      searchResultsAlgo.forEach((item) => {
        tempNames.push(item.name);
        tempLinks.push(item.link);
        setnameAlgo(tempNames);
        setlinkAlgo(tempLinks);
      });
    } else {
      setnameAlgo([]);
      setlinkAlgo([]);
    }
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
          <h1 className="h1 pe-4">Index</h1>
        </div>
        <div className="container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onChange={searchFilter}
          />
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
                {nameDS.map((name, i) => {
                  return (
                    <ListItems
                      key={i}
                      index={index}
                      setIndex={setIndex}
                      name={name}
                      link={linkDS[i]}
                    />
                  );
                })}
              </ul>
            </li>
            <div className="m-2"></div>
            <li className="nav-item">
              <span className="nav-link h4 text-warning">Algorithms</span>
              <ul
                className="pe-3"
                style={{ listStyleType: "none", lineHeight: "2rem" }}
              >
                {nameAlgo.map((name, i) => {
                  return (
                    <ListItems
                      key={i}
                      index={index}
                      setIndex={setIndex}
                      name={name}
                      link={linkAlgo[i]}
                    />
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark sticky fixed-top position-fixed bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
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
