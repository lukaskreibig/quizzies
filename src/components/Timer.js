import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ key, handleAnswerOptionClick }) => (
  <CountdownCircleTimer
    key={key}
    isPlaying
    duration={15}
    backgroundColor={"#1a6340"}
    colors={[
      ["#32b8ca", 0.44],
      ["#e053a8", 0.33],
      ["#FF0000", 0.22],
    ]}
    onComplete={() => handleAnswerOptionClick()}
    size={80}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default Timer;
