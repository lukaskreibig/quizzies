import "./Home.css";
import StartBtn from "./StartBtn";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <h1>Welcome to Trivia Night</h1>
            <br></br>
            <p id="introduction">
                Trivia Night is a quiz game full of surprises! <br></br>
                Try to answer each question while the clock is running. If you
                get stuck, use the joker card. <br></br>
                If you make it to the end, you will be rewarded appropriately.
                <br></br>
                To enter the game, click on the spinning wheel.
                <br></br>
            </p>

            <Link to="/inputselect">
                <StartBtn />
            </Link>
        </div>
    );
}

export default Home;
