import React from "react";
// import Slider from "./Slider";
import Topic from "./Topic";
import Difficulty from "./Difficulty";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function InputSelect({ quizCategories, changeTopic, changeDifficulty }) {
  return (
    <div className="Input">
      <div className="Topic">
        <h2>Search for a topic:</h2>
        <Topic quizCategories={quizCategories} changeTopic={changeTopic} />
      </div>
      <div className="diffbtn">
        <Difficulty changeDifficulty={changeDifficulty} />
      </div>
      <div className="start-quiz">
        <Link to="/quiz">
          <button className="input-start">
            <h1>START</h1>
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default InputSelect;
