import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ key, timesUp }) => (
  <CountdownCircleTimer
    key={key}
    isPlaying
    duration={12}
    colors={[
      ["#1a6340", 0.33],
      ["#FFFF00", 0.33],
      ["#BE1600", 0.33],
    ]}
    onComplete={() => timesUp()}
    size={80}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default Timer;
