import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Components/HomePage.jsx";
import Footer from "./Components/Footer.jsx";

import DS from "./Components/Code.jsx";

const App = () => {
  //Format - js,c,py,java,c++
  const gistDirectory = [
    {
      Stack: [
        "fa2b93b9cd74fa81f9af34baf69177ed",
        "036ab70dd9e81c67084851f6aff84935",
        "3b0d5e1eb0661b92e2430d5a35e5b6c6",
        "310c2e2e651da9361f2a68a2661ab3df",
        "6f59de5717b30ac59d98aa322a0f653a",
      ],
    },
  ];
  return (
    <div className="min-vh-100" style={{ backgroundColor: "#000" }}>
      <Router>
        <Navbar />
        <Route path="/" component={HomePage} />
        <Route
          path="/stack"
          render={() => <DS header="Stack" gistId={gistDirectory[0].Stack} />}
        />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
