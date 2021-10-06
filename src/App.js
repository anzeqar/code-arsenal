import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Components/HomePage.jsx";
import Footer from "./Components/Footer.jsx";

import Code from "./Components/Code.jsx";

const App = () => {
  //Format - js,c,py,java,c++
  const gistDirectory = [
    {
      Stack: ["74740c439f49e8a72a96973651b3bf30", "", "", "", ""],
    },
    // {
    //   MergeSort: ["","","","",""],
    // },
  ];
  // {}
  return (
    <div className="min-vh-100" style={{ backgroundColor: "#000" }}>
      <Router>
        <Navbar />
        <Route
          path="/stack"
          exact
          render={() => <Code header="Stack" gistId={gistDirectory[0].Stack} />}
        />
        {/* <Route
            path="/mergesort"
            exact
            render={() => (
              <DS header="Merge Sort" gistId={gistDirectory[1].MergeSort} />
            )}
          /> */}

        <Route path="/" exact component={HomePage} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
