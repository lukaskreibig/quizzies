import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import "./Quizz.css";

function Quiz({ quizArray }) {
  // const [quizArray, setQuizArray] = useState([]);
  // const quizFetch = () => {
  //     axios
  //         .get("https://opentdb.com/api.php?amount=10&type=multiple")
  //         .then((res) => setQuizArray(res.data.results));
  // };
  // useEffect(quizFetch, []);

  //Set status to current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  //iterates through all the answers, randomizes them and puts them in the state "answers"
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

      // if answer === quizArray[i].correct_answer
    );
  }
  console.log(answers);

  //updating score according to answer selected
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizArray.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return quizArray.length > 0 ? (
    <div className="App">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizArray.length}
        </div>
      ) : (
        <>
          {/*display current question*/}
          <div className="question-section">
            <h1 className="question-text">
              {quizArray[currentQuestion].question}
            </h1>
          </div>
          {/*display list of answers to the current question*/}
          <div className="answer-section">
            {/*List of answers*/}
            {quizArray[currentQuestion].incorrect_answers.map((answer) => (
              <button
                className="answer-btn"
                onClick={() => handleAnswerOptionClick(answer.isCorrect)}
              >
                {answer}
              </button>
            ))}
            {/*display question number out of 10*/}
            <div className="question-count">
              <h2>
                Question {currentQuestion + 1}/{quizArray.length}
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  ) : (
    <div className="App">
      <h2> ...Loading QUIZ...</h2>
      <div></div>
    </div>
  );
}

export default Quiz;

//https://opentdb.com/api.php?amount=10
//https://opentdb.com/api.php?amount=10&category=22&difficulty=medium
//.replace(/&quot;/g, '\"').replace(/;&#039;/g,"'").replace(/&#039;/g,"'").replace(/&rsquo;/g,"'")
//   decode('&quot;');
//const regex = / /g
