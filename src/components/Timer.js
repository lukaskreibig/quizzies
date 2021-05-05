import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ key, timesUp }) => (
  <CountdownCircleTimer
    key={key}
    isPlaying
    duration={15}
    colors={[
      ["#1a6340", 0.33],
      ["#FFFF00", 0.33],
      ["#ff0000", 0.33],
    ]}
    onComplete={() => timesUp()}
    size={80}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default Timer;
