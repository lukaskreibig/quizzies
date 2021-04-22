import React from "react";
import Slider from "./Slider";
import Topic from "./Topic";
import "./InputSelect.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function InputSelect() {
  const [quizArray, setQuizArray] = useState([]);
  const [quizCategories, setQuizCategories] = useState([]);
  const [quizTopic, setQuizTopic] = useState("empty");

  const categoriesAPI = () => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setQuizCategories(res.data.trivia_categories));
  };
  useEffect(categoriesAPI, []);

  const quizAPI = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => setQuizArray(res.data.results));
  };
  useEffect(quizAPI, []);

  const changeTopic = (event) => {
    setQuizTopic(event.value);
    console.log(quizTopic);
  };

  return (
    <div className="Input">
      <div className="Topic">
        <h2>Search for a topic:</h2>
        <Topic quizCategories={quizCategories} changeTopic={changeTopic} />
      </div>
      <div className="Difficulty">
        <h2>Choose a difficulty level:</h2>
        <button>Easy</button> <button>Medium</button> <button>Hard</button>
        {/* <Slider /> */}
      </div>
      <Link to="/quiz">
        <h1>START</h1>
      </Link>
    </div>
  );
}

export default InputSelect;
