import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import InputSelect from "./components/InputSelect";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [quizArray, setQuizArray] = useState([]);
  const [quizCategories, setQuizCategories] = useState([]);
  const [quizTopic, setQuizTopic] = useState("");
  const [quizDifficulty, setQuizDifficulty] = useState("");
  const [answers, setAnswers] = useState([]);

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

  //iterates through all the answers, randomizes them and puts them in the state "answers"
  const randomizeThis = () => {
    for (let i = 0; i < quizArray.length; i++) {
      answers.push(
        [quizArray[i].correct_answer, ...quizArray[i].incorrect_answers]
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value)
          .map((answer) => ({
            answerText: answer,
            isCorrect: answer === quizArray[i].correct_answer ? true : false,
          }))
      );
    }
  };

  const changeTopic = (event) => {
    setQuizTopic(event.value);
  };

  const changeDifficulty = (event) => {
    setQuizDifficulty(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/inputselect"
          render={() => (
            <InputSelect
              quizArray={quizArray}
              quizCategories={quizCategories}
              changeTopic={changeTopic}
              changeDifficulty={changeDifficulty}
              randomizeThis={randomizeThis}
            />
          )}
        />
        <Route
          path="/quiz"
          render={() => <Quiz quizArray={quizArray} answers={answers} />}
        />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
