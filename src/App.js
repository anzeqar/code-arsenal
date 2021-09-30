import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Components/HomePage.jsx";
import Footer from "./Components/Footer.jsx";

import DS from "./Components/Code.jsx";

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
        <Switch>
          <Route
            path="/code-arsenal/stack"
            render={() => <DS header="Stack" gistId={gistDirectory[0].Stack} />}
          />
          {/* <Route
            path="/code-arsenal/mergesort"
            exact
            render={() => (
              <DS header="Merge Sort" gistId={gistDirectory[1].MergeSort} />
            )}
          /> */}

          <Route path="/code-arsenal/" component={HomePage} />
          <Route component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
