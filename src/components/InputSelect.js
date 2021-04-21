import React from "react";
import Slider from "./Slider";
import Topic from "./Topic";
import "./InputSelect.css";
import { Link } from "react-router-dom";

function InputSelect() {
    return (
        <div className="Inputbody">
            <div className="Topic">
                <h2>Search for a topic:</h2>
                <Topic />
            </div>
            <div className="Difficulty">
                <h2>Choose a difficulty level:</h2>
                <Slider />
            </div>
            <Link to="/quiz">
                <h1>START</h1>
            </Link>
        </div>
    );
}

export default InputSelect;
