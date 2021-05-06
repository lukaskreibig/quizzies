import StartBtn from "./StartBtn";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";
import Typography from "@material-ui/core/Typography";
import { useSpring, animated } from "react-spring";

function Home() {
  const title = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1000,

    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });

  const text = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 2000,

    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });

  const wheel = useSpring({
    from: { y: -800, opacity: 0 },
    to: { y: 0, opacity: 1 },
    leave: { opacity: 0 },
    delay: 100,

    config: {
      duration: 900, // duration for the whole animation form start to end
    },
  });

  return (
    <div className="Home">
      <animated.div style={title}>
        <h1 className="maintitle-desktop">Welcome to the Game!</h1>
        <h1 className="maintitle-mobile">Welcome to Trivia Night</h1>
      </animated.div>
      <animated.div style={text}>
        <div className="intro-text">
          <p id="intro">
            Trivia Night is a quiz game full of surprises! <br></br>
            Try to answer each question while the clock is running. If you get
            stuck, use the joker card. <br></br>
            If you make it to the end, you will be rewarded appropriately.
            <br></br>
            To enter the game, click on the spinning wheel.
            <br></br>
          </p>
        </div>
      </animated.div>
      <div className="intro-text-mobile">
        <ReadMore>
          <Typography className="intro-mobile">
            Trivia Night is a quiz full of surprises!<br></br>
            Try to answer each question while the clock is running. If you get
            stuck, use the joker card. <br></br>To enter the game, click the
            spinning wheel.
          </Typography>
        </ReadMore>
      </div>
      <animated.div style={wheel}>
        <div className="start-container">
          <Link to="/inputselect">
            <StartBtn />
          </Link>
        </div>
      </animated.div>
    </div>
  );
}

export default Home;
