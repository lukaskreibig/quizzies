import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ key }) => (
  <CountdownCircleTimer
    key={key}
    isPlaying
    duration={1}
    colors={[
      ["#32b8ca", 0.33],
      ["#e053a8", 0.33],
      ["#e1af4f", 0.33],
    ]}
    onComplete={() => console.log("Its Over!")}
    size={80}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);

export default Timer;
