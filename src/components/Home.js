import "./Home.css";
import StartBtn from "./StartBtn";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <h1>Welcome to Trivia Night</h1>
            <h2>Enter the Game</h2>
            <Link to="/inputselect">
                <StartBtn />
            </Link>
        </div>
    );
}

export default Home;
