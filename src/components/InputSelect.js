import React from "react";
import Topic from "./Topic";
import Difficulty from "./Difficulty";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function InputSelect({ quizCategories, changeTopic, changeDifficulty }) {
  const topic = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 100,

    config: {
      duration: 900, // duration for the whole animation form start to end
    },
  });

  const difficulty = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 500,

    config: {
      duration: 300, // duration for the whole animation form start to end
    },
  });

  const button = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1000,

    config: {
      duration: 300, // duration for the whole animation form start to end
    },
  });

  return (
    <div className="Input">
      <animated.div style={topic}>
        <div className="Topic">
          <h2>Search for a topic:</h2>

          <Topic quizCategories={quizCategories} changeTopic={changeTopic} />
        </div>
      </animated.div>
      <div className="diffbtn">
        <Difficulty changeDifficulty={changeDifficulty} />
      </div>
      <animated.div style={button}>
        <div className="start-quiz">
          <Link to="/quiz">
            <button className="input-start">
              <h1>START</h1>
            </button>
          </Link>
        </div>
      </animated.div>
    </div>
  );
}

export default InputSelect;
