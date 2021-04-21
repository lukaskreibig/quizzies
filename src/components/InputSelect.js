import React from "react";
import Slider from "./Slider";
import Topic from "./Topic";
import "./InputSelect.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function InputSelect() {
  const [quizCategories, setQuizCategories] = useState([]);

  const quizFetch = () => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setQuizCategories(res.data.trivia_categories));
  };

  useEffect(quizFetch, []);

  return (
    <div className="Input">
      <div className="Topic">
        <h2>Search for a topic:</h2>
        <Topic quizCategories={quizCategories} />
      </div>
      <div className="Difficulty">
        <h2>Choose a difficulty level:</h2>
        <Slider />
      </div>
      <Link to="/quiz">
        <h1>START</h1>
      </Link>
    </div>
  );
}

export default InputSelect;
