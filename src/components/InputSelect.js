import React from "react";
// import Slider from "./Slider";
import Topic from "./Topic";
import Difficulty from "./Difficulty";
import "./InputSelect.css";
import { Link } from "react-router-dom";

function InputSelect({
  quizCategories,
  changeTopic,
  changeDifficulty,
  randomizeThis,
}) {
  return (
    <div className="Input">
      <div className="Topic">
        <h2>Search for a topic:</h2>
        <Topic quizCategories={quizCategories} changeTopic={changeTopic} />
      </div>
      <div className="diffbtn">
        <Difficulty changeDifficulty={changeDifficulty} />
      </div>
      <Link to="/quiz" onClick={randomizeThis()}>
        <h1>START</h1>
      </Link>
    </div>
  );
}

export default InputSelect;
