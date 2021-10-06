import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Components/HomePage.jsx";
import Footer from "./Components/Footer.jsx";
import NotFoundPage from "./Components/NotFoundPage.jsx";
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
    <div style={{ backgroundColor: "#000" }}>
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/stack"
            exact
            render={() => (
              <Code header="Stack" gistId={gistDirectory[0].Stack} />
            )}
          />
          {/* <Route
            path="/mergesort"
            exact
            render={() => (
              <DS header="Merge Sort" gistId={gistDirectory[1].MergeSort} />
            )}
          /> */}

          <Route path="/" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
