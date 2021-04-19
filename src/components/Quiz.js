import axios from "axios";
import { useState, useEffect } from "react";

function Quiz() {
  const [quizArray, setQuizArray] = useState([]);

  const quizFetch = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((res) => setQuizArray(res.data.results));
  };

  useEffect(quizFetch, []);

  let quizAnswers = [
    quizArray[0].correct_answer.push(quizArray[0].incorrect_answers),
    console.log(quizAnswers),
  ];

  let shuffledAnswers = quizAnswers
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  console.log(shuffledAnswers);

  return quizArray.length > 0 ? (
    <div>
      <h2> {quizArray[0].question} </h2>

      {shuffledAnswers.map((answers) => (
        <button> {answers} </button>
      ))}

      {/* Make an array of answers shuffled and map over them to render the button */}
    </div>
  ) : (
    <div className="App">
      <h2> ...Loading QUIZ...</h2>
      <div></div>
    </div>
  );
}

//https://opentdb.com/api.php?amount=10
//https://opentdb.com/api.php?amount=10&category=22&difficulty=medium
//.replace(/&quot;/g, '\"').replace(/;&#039;/g,"'").replace(/&#039;/g,"'").replace(/&rsquo;/g,"'")
//   decode('&quot;');
//const regex = / /g

export default Quiz;
