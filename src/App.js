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
    },
    {
      LinearSearch: ["9d555e26ed72d0f2e145ea9b6fd0296b", "", "", "", ""],
      BinarySearch: ["2387bb773b68c642d8a2f8fbe70a3948", "", "", "", ""],
      FactorialRecursion: ["d03b9520443b7964d9753fd3e615ede8", "", "", "", ""],
      FibonacciRecursion: ["b0649a8020b1e53655fb72ef77b6f02e", "", "", "", ""],
      FibonacciMemoization: [
        "15fdcb7d07302c47bd4d9232b8fdaeb0",
        "",
        "",
        "",
        "",
      ],
      BubbleSort: ["5a1bb0b8a0309bdf29cb5202d8b2ea3b", "", "", "", ""],
      InsertionSort: ["9f90673652f4b455632269614b03822b", "", "", "", ""],
      SelectionSort: ["5544e7acec966dce91b42e9a0a412583", "", "", "", ""],
      MergeSort: ["6664e5c958c0222b7ef6ad196996e976", "", "", "", ""],
      QuickSort: ["202c32ed6b1cc97d57312701083d024a", "", "", "", ""],
    },
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
            path="/array"
            exact
            render={() => (
              <Code header="Array" gistId={gistDirectory[0].Array} />
            )}
          />
          <Route
            path="/merge-sort"
            exact
            render={() => (
              <Code header="Merge Sort" gistId={gistDirectory[1].MergeSort} />
            )}
          />{" "}
          <Route
            path="/quick-sort"
            exact
            render={() => (
              <Code header="Quick Sort" gistId={gistDirectory[1].QuickSort} />
            )}
          />{" "}
          <Route
            path="/selection-sort"
            exact
            render={() => (
              <Code
                header="Selection Sort"
                gistId={gistDirectory[1].SelectionSort}
              />
            )}
          />{" "}
          <Route
            path="/insertion-sort"
            exact
            render={() => (
              <Code
                header="Insertion Sort"
                gistId={gistDirectory[1].InsertionSort}
              />
            )}
          />{" "}
          <Route
            path="/bubble-sort"
            exact
            render={() => (
              <Code header="Bubble Sort" gistId={gistDirectory[1].BubbleSort} />
            )}
          />{" "}
          <Route
            path="/linear-search"
            exact
            render={() => (
              <Code
                header="Linear Search"
                gistId={gistDirectory[1].LinearSearch}
              />
            )}
          />{" "}
          <Route
            path="/binary-search"
            exact
            render={() => (
              <Code
                header="Binary Search"
                gistId={gistDirectory[1].BinarySearch}
              />
            )}
          />
          <Route
            path="/fibonacci-recursion"
            exact
            render={() => (
              <Code
                header="Fibonacci Recursion"
                gistId={gistDirectory[1].FibonacciRecursion}
              />
            )}
          />
          <Route
            path="/factorial-recursion"
            exact
            render={() => (
              <Code
                header="Factorial Recursion"
                gistId={gistDirectory[1].FactorialRecursion}
              />
            )}
          />
          <Route
            path="/fibonacci-memoization"
            exact
            render={() => (
              <Code
                header="Fibonacci Memoization"
                gistId={gistDirectory[1].FibonacciMemoization}
              />
            )}
          />
          <Route path="/" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
