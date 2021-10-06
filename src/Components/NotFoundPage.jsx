import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="pt-4 mt-4"></div>
      </div>

      <div className="container pt-4 mt-4"></div>
      <h1 className="text-light text-center pb-4 mb-2">404 : Page Not Found</h1>
      <div className="container text-center">
        <button className="btn btn-primary text-light mb-4">
          <Link to="/" className="text-light text-decoration-none">
            Back to Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
