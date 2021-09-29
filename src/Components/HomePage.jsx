import React from "react";
import "../App.css";
import Typewriter from "typewriter-effect";
import { useState } from "react";

const HomePage = () => {
  const [welcome, setWelcome] = useState(false);
  var iterations = 0;
  return (
    <div className="container container-fluid w-100 d-flex flex-column">
      <div className="d-flex justify-content-center text-center">
        <div
          className="d-flex align-items-center text-center text-info"
          style={{ minHeight: "90vh", fontSize: "3rem", textAlign: "center" }}
        >
          {welcome === false ? (
            <Typewriter
              options={{
                strings: [
                  "The Code You Always Wanted",
                  "JS, C, Python, Java, C++",
                  "For Data Structures Algorithms",
                  "Start Exploring Right Now",
                ],
                autoStart: true,
                delay: 10,
                deleteSpeed: 10,
                pauseFor: 2000,
                onRemoveNode: () => {
                  iterations++;
                  if (iterations >= 105) {
                    setWelcome(true);
                    return;
                  }
                },
              }}
              style={{ textAlign: "center" }}
            />
          ) : (
            <p
              style={{
                textAlign: "center",
                fontSize: "3rem",
                lineHeight: "4rem",
              }}
            >
              Just Click The Index Button
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
