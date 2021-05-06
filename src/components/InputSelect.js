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
    delay: 1200,

    config: {
      duration: 500, // duration for the whole animation form start to end
    },
  });

  const topicselect = useSpring({
    from: { x: -800, opacity: 0 },
    to: { x: 0, opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,

    config: {
      duration: 300, // duration for the whole animation form start to end
    },
  });

  const button = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1200,

    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });

  return (
    <div className="Input">
      <div className="Topic">
        <animated.div style={topic}>
          <h2>Search for a topic:</h2>
        </animated.div>
        <animated.div style={topicselect}>
          <Topic quizCategories={quizCategories} changeTopic={changeTopic} />
        </animated.div>
      </div>

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
