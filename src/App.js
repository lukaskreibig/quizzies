import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Quiz from "./components/Quiz";
import InputSelect from "./components/InputSelect";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
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
        `https://opentdb.com/api.php?type=multiple&amount=10&category=${topic}&${difficulty}&encode=base64`
      )
      .then((res) => setQuizArray(res.data.results));
  };
  useEffect(() => {
    quizAPI(quizTopic, quizDifficulty);
  }, [quizTopic, quizDifficulty]);

  const changeTopic = (event) => {
    setQuizTopic(event.value);
  };

  const changeDifficulty = (event) => {
    setQuizDifficulty(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="big-flex">
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
              />
            )}
          />
          <Route path="/quiz" render={() => <Quiz quizArray={quizArray} />} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
