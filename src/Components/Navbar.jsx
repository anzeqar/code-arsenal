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
    { name: "Queue", link: "/queue" },
    { name: "Array", link: "/array" },
    { name: "Linked List", link: "/linked-list" },
  ];
  const algoDB = [
    { name: "Linear Search", link: "/linear-search" },
    { name: "Binary Search", link: "/binary-search" },
    { name: "Bubble Sort", link: "/bubble-sort" },
    { name: "Insetion Sort", link: "/insertion-sort" },
    { name: "Selection Sort", link: "/selection-sort" },
    { name: "Merge Sort", link: "/merge-sort" },
    { name: "Quick Sort", link: "/quick-sort" },
    { name: "Factorial Recursion", link: "/factorial-recursion" },
    { name: "Fibonacci Recursion", link: "/fibonacci-recursion" },
    { name: "Fibonacci Memoization", link: "/fibonacci-memoization" },
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
          <h2 className="h2 pe-4">Index</h2>
        </div>
        <div className="container">
          <input
            type="text"
            name="search"
            id="search"
            className="bg-dark text-light form-control border-secondary shadow-none"
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
              className="btn btn-primary shadow-none"
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
