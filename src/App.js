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
      Queue: ["60b78bcb1d5d3aa508e225bda71a8a2d", "", "", "", ""],
      Array: ["e158aebd59e4c301bbf3d87ee400916d", "", "", "", ""],
      LinkedList: ["cc6fc76ac762f7562e390ee3ac5d0a4d", "", "", "", ""],
      HashTable: ["6eb21f5f8984046e50e5de7dcbdb116c", "", "", "", ""],
      BinarySearchTree: ["08a9f9faecc6826c092a3885b45a37ed", "", "", "", ""],
      Graph: ["6733a1cb5e250f48e7547cdb89837aea", "", "", "", ""],
      Heap: ["77437394fabf8842b2fefd42e37614fe", "", "", "", ""],
    },
    // {
    //   MergeSort: ["","","","",""],
    // },
  ];

  // {}
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Router forceRefresh={true}>
        <Navbar />
        <Switch>
          <Route
            path="/stack"
            exact
            render={() => (
              <Code header="Stack" gistId={gistDirectory[0].Stack} />
            )}
          ></Route>
          <Route
            path="/queue"
            exact
            render={() => (
              <Code header="Queue" gistId={gistDirectory[0].Queue} />
            )}
          />
          <Route
            path="/array"
            exact
            render={() => (
              <Code header="Array" gistId={gistDirectory[0].Array} />
            )}
          />
          <Route
            path="/linked-list"
            exact
            render={() => (
              <Code header="Linked List" gistId={gistDirectory[0].LinkedList} />
            )}
          />
          <Route
            path="/hash-table"
            exact
            render={() => (
              <Code header="Hash Table" gistId={gistDirectory[0].HashTable} />
            )}
          />
          <Route
            path="/binary-search-tree"
            exact
            render={() => (
              <Code
                header="Binary Search Tree"
                gistId={gistDirectory[0].BinarySearchTree}
              />
            )}
          />
          <Route
            path="/graph"
            exact
            render={() => (
              <Code header="Graph" gistId={gistDirectory[0].Graph} />
            )}
          />
          <Route
            path="/heap"
            exact
            render={() => <Code header="Heap" gistId={gistDirectory[0].Heap} />}
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
