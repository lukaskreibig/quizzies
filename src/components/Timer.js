
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = ({ key }) => (
  <CountdownCircleTimer
  key={key}
  isPlaying
  duration={10}
  colors={[['#32b8ca', 0.33],
           ['#e053a8', 0.33],
           ['#e1af4f', 0.33],
]}
  onComplete={() => [true, 1000]}
  size={80}
>
{({ remainingTime }) => remainingTime}
</CountdownCircleTimer>
)

export default Timer; 