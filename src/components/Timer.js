import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ key, handleAnswerOptionClick }) => (
  <CountdownCircleTimer
    key={key}
    isPlaying
    duration={15}
    backgroundColor={"#1a6340"}
    colors={[
      ["#1a6340", 0.33],
      ["#FFFF00", 0.33],
      ["#ff3232", 0.33],
    ]}
    onComplete={() => handleAnswerOptionClick()}
    size={80}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default Timer;
