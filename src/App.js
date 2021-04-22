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
import SocialFollow from "./components/SocialFollow";

function App() {
  const [quizArray, setQuizArray] = useState([]);

  const quizFetch = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => setQuizArray(res.data.results));
  };
  useEffect(quizFetch, []);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/inputselect" component={InputSelect} />
        <Route
          path="/quiz"
          component={Quiz}
          render={() => <Quiz quizCategories={quizArray} />}
        />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
