import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer mt-2 pb-2">
        <p className="text-light text-center" style={{ textAlign: "center" }}>
          Developed by<span> </span>
          <a
            href="https://github.com/anzeqar"
            rel="noreferrer"
            className="link-info"
            target="_blank"
          >
            @anzeqar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
