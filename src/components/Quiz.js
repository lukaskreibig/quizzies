import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Timer from "./Timer";


function Quiz({ quizArray }) {
    //Set status to current question
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);

    console.log(score);
    //iterates through all the answers, randomizes them and puts them in the state "answers"
    for (let i = 0; i < quizArray.length; i++) {
        answers.push(
            [quizArray[i].correct_answer, ...quizArray[i].incorrect_answers]
                .map((a) => ({ sort: Math.random(), value: a }))
                .sort((a, b) => a.sort - b.sort)
                .map((a) => a.value)
                .map((answer) => ({
                    answerText: answer,
                    isCorrect:
                        answer === quizArray[i].correct_answer ? true : false,
                }))
        );
    }

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


    const master = () => {
        if (+score < 4) {
            return <h1>Quiz Newbie!</h1>;
        } else if (+score > 7) {
            return <h1>Quiz Master!</h1>;
        } else {
            return <h1>Quiz Padawan!</h1>;
        }
    };
      

    return quizArray.length > 0 ? (
        <div className="App">
            {showScore ? (
                <>
                    <div className="result-structure">
                        <table>
                            <tbody>
                                <tr>
                                    <td colspan="1">
                                        <div className="pink-star">★</div>
                                        <div className="blue-star">★</div>
                                        <div className="pink-star">★</div>
                                    </td>
                                    <td colspan="4">
                                        <div className="score-section">
                                            <h1>TRIVIA NIGHT</h1>
                                            <h2>Quiz Result</h2>
                                            <h3>You scored</h3>
                                            <div className="final-score-height">
                                                <h1 className="final-score">
                                                    {score} / {quizArray.length}
                                                </h1>
                                            </div>
                                            <h3>You made it to</h3>
                                            <div className="master-level">
                                                {master()}
                                            </div>
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
                            <h2>Did you like the game?</h2>
                            <Link className="link-feedback-btn" to="/contact">
                                <button className="feedback-btn">
                                    Feedback
                                </button>
                            </Link>
                        </div>
                        <div className="after-quiz-options">
                            <h2>Play again</h2>
                            <div className="img-container-small">
                                <img
                                    className="startbtnsmall"
                                    src="https://i.ibb.co/ZKNdzPR/start-button-without-play.png"
                                    alt="start button"
                                />
                                <Link
                                    className="link-btn-small"
                                    to="/inputselect"
                                >
                                    <img
                                        className="playbtnsmall"
                                        src="https://i.ibb.co/M5fhCSf/start-button-play-only.png"
                                        alt="play button"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/*display current question*/}
                    <div className="question-section">
                        <h1 className="question-text">
                            {quizArray[currentQuestion].question
                                .replace(/&quot;/g, '"')
                                .replace(/;&#039;/g, "'")
                                .replace(/&#039;/g, "'")
                                .replace(/&rsquo;/g, "'")}
                        </h1>
                    </div>
                    {/*display list of answers to the current question*/}
                    <div className="answer-section">
                        <div className="answers-flex">
                            {/*List of answers*/}
                            {answers[currentQuestion].map((answerOption) => (
                                <button
                                    className="questionbtn"
                                    onClick={() =>
                                        handleAnswerOptionClick(
                                            answerOption.isCorrect
                                        )
                                    }
                                >
                                    {answerOption.answerText
                                        .replace(/&quot;/g, '"')
                                        .replace(/;&#039;/g, "'")
                                        .replace(/&#039;/g, "'")
                                        .replace(/&rsquo;/g, "'")}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/*display question number out of 10*/}
                    <div className="question-count-container">
                        <div className="question-count">
                            <h2>
                                {currentQuestion + 1}/{quizArray.length}
                            </h2>
                        </div>
                    </div>
                    <div className="quit-btn-container">
                        <Link className="quit-btn" to="/InputSelect">
                            <button className="quit-game-btn">Quit</button>
                        </Link>
                    </div>
                    <div className ="timer-container">
                        <Timer key={currentQuestion} />
                    </div>
                    <div>
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
