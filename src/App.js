import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { decode } from "html-entities";
import Home from "./components/Home";

function App() {
    const [quizArray, setQuizArray] = useState([]);

    const quizFetch = () => {
        axios
            .get("https://opentdb.com/api.php?amount=10&type=multiple")
            .then((res) => setQuizArray(res.data.results));
    };

    useEffect(quizFetch, []);

    return quizArray.length > 0 ? (
        <div className="App">
            <h2> {quizArray[0].question} </h2>
            <button> {quizArray[0].correct_answer} </button>
            {quizArray[0].incorrect_answers.map((answer) => (
                <button> {answer} </button>
            ))}
        </div>
    ) : (
        <div className="App">
            <Home />
            <h2> ...Loading QUIZ...</h2>
        </div>
    );
}

export default App;

//https://opentdb.com/api.php?amount=10
//https://opentdb.com/api.php?amount=10&category=22&difficulty=medium
//.replace(/&quot;/g, '\"').replace(/;&#039;/g,"'").replace(/&#039;/g,"'").replace(/&rsquo;/g,"'")
//   decode('&quot;');
//const regex = / /g
