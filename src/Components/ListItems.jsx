import React from "react";
import { Link } from "react-router-dom";

const ListItems = ({ index, setIndex, name, link }) => {
  const toggleIndex = () => {
    if (index === "Index") setIndex("Close");
    else setIndex("Index");
  };
  return (
    <>
      <li
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
        className="text-info text-decoration-none"
        style={{ fontSize: "1.15rem" }}
        onClick={toggleIndex}
      >
        <Link to={link} className="text-info text-decoration-none">
          {name}
        </Link>
      </li>
    </>
  );
};

export default ListItems;
