import StartBtn from "./StartBtn";
import { Link } from "react-router-dom";
import ReadMore from "./ReadMore";
import Typography from "@material-ui/core/Typography";
import Footer from "./Footer";

function Home() {
  return (
    <div className="Home">
      <h1 className="maintitle-desktop">Welcome to the Game!</h1>
      <h1 className="maintitle-mobile">Welcome to Trivia Night</h1>
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
      <div className="start-container">
        <Link to="/inputselect">
          <StartBtn />
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
