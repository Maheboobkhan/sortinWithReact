import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <h1 className="heading">Sorting Visualization</h1>
        <div className="btn-container">
          <Link to="/bubble">
            <button className="bubble">Bubble Sort</button>
          </Link>
          <Link to="/selection">
            <button className="selection">Selection Sort</button>
          </Link>
          <Link to="/insertion">
            <button className="insertion">Insertion Sort</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
