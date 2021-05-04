import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = ({ key }) => (
  <CountdownCircleTimer
  key={key}
  isPlaying
  duration={10}
  colors={[['#e1af4f', 0.55],
]}
  onComplete={() => [true, 1000]}
  size={80}
>
{({ remainingTime }) => remainingTime}
</CountdownCircleTimer>
)

export default Timer; 

 