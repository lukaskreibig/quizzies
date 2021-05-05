import React from "react";
// import Slider from "./Slider";
import Topic from "./Topic";
import Difficulty from "./Difficulty";
import { Link } from "react-router-dom";
import axios from "axios";

function InputSelect({ quizCategories, changeTopic, changeDifficulty }) {
    // const quizAPI = (topic, difficulty) => {
    //   axios
    //     .get(
    //       `https://opentdb.com/api.php?type=multiple&amount=10&category=${topic}&${difficulty}`
    //     )
    //     .then((res) => setQuizArray(res.data.results));
    // };
    // useEffect(() => {
    //   quizAPI(quizTopic, quizDifficulty);
    // }, [quizTopic, quizDifficulty]);

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
            <div className="start-quiz">
                <Link to="/quiz">
                    <img
                        className="start-img"
                        src="https://i.ibb.co/cLSSGct/Screenshot-from-2021-05-05-11-54-59.png"
                        alt="start quiz"
                    />
                </Link>
            </div>
        </div>
    );
}

export default InputSelect;
