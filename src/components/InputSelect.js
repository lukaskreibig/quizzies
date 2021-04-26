import React from "react";
// import Slider from "./Slider";
import Topic from "./Topic";
import Difficulty from "./Difficulty";
import "./InputSelect.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";

function InputSelect() {
    const [quizArray, setQuizArray] = useState([]);
    const [quizCategories, setQuizCategories] = useState([]);
    const [quizTopic, setQuizTopic] = useState("");
    const [quizDifficulty, setQuizDifficulty] = useState("");

    const categoriesAPI = () => {
        axios
            .get("https://opentdb.com/api_category.php")
            .then((res) => setQuizCategories(res.data.trivia_categories));
    };
    useEffect(categoriesAPI, []);

    const quizAPI = (topic, difficulty) => {
        axios
            .get(
                `https://opentdb.com/api.php?type=multiple&amount=10&category=${topic}&${difficulty}`
            )
            .then((res) => setQuizArray(res.data.results));
    };
    useEffect(() => {
        quizAPI(quizTopic, quizDifficulty);
    }, [quizTopic, quizDifficulty]);

    console.log(quizDifficulty);
    console.log(quizTopic);
    console.log(quizArray);

    const changeTopic = (event) => {
        setQuizTopic(event.value);
        console.log(quizTopic);
    };

    const changeDifficulty = (event) => {
        setQuizDifficulty(event.target.value);
        console.log(quizDifficulty);
    };

    return (
        <div className="Input">
            <div className="Topic">
                <h2>Search for a topic:</h2>
                <Topic
                    quizCategories={quizCategories}
                    changeTopic={changeTopic}
                />
            </div>
            <div className="diffbtn">
                <Difficulty changeDifficulty={changeDifficulty} />
            </div>
            <Link to="/quiz">
                <h1>START</h1>
            </Link>
        </div>
    );
}

export default InputSelect;
