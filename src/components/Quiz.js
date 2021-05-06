import { useState } from "react";
import { Link } from "react-router-dom";
import jokerPic from "./img/joker-card.png";
import Timer from "./Timer";
import { useSpring, animated } from "react-spring";

function Quiz({ quizArray }) {
  //Set status to current question
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answers] = useState([]);
  const [jokerAnswers, setJokerAnswers] = useState(null);
  const [joker, setJoker] = useState(false);
  const [jokerUsed, setJokerUsed] = useState(false);
  const [jokerCard, setJokerCard] = useState("joker");
  const [changeColor, setChangeColor] = useState(false);

  //iterates through all the answers, randomizes them and puts them in the state "answers"

  for (let i = 0; i < quizArray.length; i++) {
    answers.push(
      [quizArray[i].correct_answer, ...quizArray[i].incorrect_answers]
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
        .map((answer, index) => ({
          id: index,
          answerText: answer,
          isCorrect: answer === quizArray[i].correct_answer ? true : false,
        }))
    );
  }

  //updating score according to answer selected
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setChangeColor(true);
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      setJoker(false);
      if (nextQuestion < quizArray.length) {
        setCurrentQuestion(nextQuestion);
        setChangeColor(false);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const fiftyJoker = () => {
    if (!jokerUsed) {
      if (answers[currentQuestion].length > 2) {
        let count = 0;
        const jokerMap = answers[currentQuestion].map((answer, index) => {
          if (answer.isCorrect === true) {
            return answer;
          } else if (answer.isCorrect !== true && count < 1) {
            count++;
            return answer;
          }
        });
        setJokerAnswers(
          jokerMap.filter((jokerAnswer) => jokerAnswer !== undefined)
        );
        setJoker(true);
        setJokerUsed(true);
        setJokerCard("jokerused");
      }
    } else {
    }
  };

  function encode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }

  const master = () => {
    if (+score < 5) {
      return <h1>Quiz Newbie!</h1>;
    } else if (+score > 10) {
      return <h1>Quiz Cheater!</h1>;
    } else if (+score > 7) {
      return <h1>Quiz Master!</h1>;
    } else {
      return <h1>Quiz Padawan!</h1>;
    }
  };

  const quiz = useSpring({
    from: { x: -1500, opacity: 0 },
    to: { x: 0, opacity: 1 },
    leave: { opacity: 0 },
    delay: 100,

    config: {
      duration: 500, // duration for the whole animation form start to end
    },
  });

  const answersAni = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1500,

    config: {
      duration: 300, // duration for the whole animation form start to end
    },
  });

  const quizUi = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 3000,

    config: {
      duration: 300, // duration for the whole animation form start to end
    },
  });

  return quizArray.length > 0 ? (
    <div className="App">
      {showScore ? (
        <animated.div style={quiz}>
          <>
            <div className="result-body">
              <div className="result-structure">
                <table>
                  <tbody>
                    <tr>
                      <td colspan="1">
                        <div className="pink-star">★</div>
                        <div className="blue-star">★</div>
                        <div className="pink-star">★</div>
                      </td>
                      <td colspan="4" className="middle-column">
                        <div className="score-section">
                          <h3>You made it to</h3>
                          <div className="master-level">{master()}</div>
                        </div>
                        <h3>You scored</h3>
                        <div className="final-score-height">
                          <h1 className="final-score">
                            {score} / {quizArray.length}
                          </h1>
                        </div>
                      </td>
                      <td colspan="1">
                        <div className="blue-star">★</div>
                        <div className="pink-star">★</div>
                        <div className="blue-star">★</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="after-quiz">
                <div className="after-quiz-options">
                  <h3>Did you like it?</h3>
                  <Link className="link-feedback-btn" to="/contact">
                    <button className="feedback-btn">Feedback</button>
                  </Link>
                </div>
                <div className="after-quiz-options">
                  <h3>Play again</h3>
                  <div className="img-container-small">
                    <img
                      className="startbtnsmall"
                      src="https://i.ibb.co/ZKNdzPR/start-button-without-play.png"
                      alt="start button"
                    />
                    <Link className="link-btn-small" to="/inputselect">
                      <img
                        className="playbtnsmall"
                        src="https://i.ibb.co/M5fhCSf/start-button-play-only.png"
                        alt="play button"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        </animated.div>
      ) : (
        <>
          <div className="quiz">
            {/*display current question*/}
            <div className="question-section">
              <h2 className="question-text">
                <animated.div style={quiz}>
                  {encode(quizArray[currentQuestion].question)}
                </animated.div>
              </h2>
            </div>
            {/*display list of answers to the current question*/}
            <div className="answer-section">
              <div className="answers-flex">
                {joker
                  ? jokerAnswers.map((answerOption) => {
                      const color = changeColor
                        ? answerOption.isCorrect
                          ? "green"
                          : "red"
                        : "";

                      return (
                        <button
                          className="questionbtn"
                          id={color}
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                        >
                          {encode(answerOption.answerText)}
                        </button>
                      );
                    })
                  : /*List of answers*/
                    answers[currentQuestion].map((answerOption) => {
                      const color = changeColor
                        ? answerOption.isCorrect
                          ? "green"
                          : "red"
                        : "";

                      return (
                        <animated.div style={answersAni}>
                          <button
                            className="questionbtn"
                            id={color}
                            onClick={() =>
                              handleAnswerOptionClick(answerOption.isCorrect)
                            }
                          >
                            {encode(answerOption.answerText)}
                          </button>
                        </animated.div>
                      );
                    })}
              </div>
            </div>

            <div className="quiz-bottom">
              <div className="quiz-bottom-left">
                {/*display timer*/}
                <animated.div style={quizUi}>
                  <div className="timer-container">
                    <Timer
                      key={currentQuestion}
                      handleAnswerOptionClick={handleAnswerOptionClick}
                    />
                  </div>
                </animated.div>
              </div>
              <div className="quiz-bottom-center">
                {/*display question number out of 10*/}
                <div className="question-count">
                  <animated.div style={quizUi}>
                    <h2>
                      {currentQuestion + 1}/{quizArray.length}
                    </h2>
                  </animated.div>
                </div>
                {/*display quit button*/}
                <div className="quit-btn-container">
                  <Link className="quit-btn" to="/InputSelect">
                    <animated.div style={quizUi}>
                      <button className="quit-game-btn">Quit</button>
                    </animated.div>
                  </Link>
                </div>
              </div>
              <div className="quiz-bottom-right">
                {/*display Joker Card*/}
                <animated.div style={quizUi}>
                  <div className={jokerCard}>
                    <img
                      src={jokerPic}
                      alt="Joker"
                      width="100%"
                      onClick={() => fiftyJoker()}
                    ></img>
                  </div>
                </animated.div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  ) : (
    <div className="App">
      <h2> ...Loading QUIZ...</h2>
    </div>
  );
}

export default Quiz;

//https://opentdb.com/api.php?amount=10
//https://opentdb.com/api.php?amount=10&category=22&difficulty=medium
//.replace(/&quot;/g, '\"').replace(/;&#039;/g,"'").replace(/&#039;/g,"'").replace(/&rsquo;/g,"'")
//   decode('&quot;');
//const regex = / /g
