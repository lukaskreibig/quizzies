
const Difficulty = ({ changeDifficulty }) => {
    return (
        <div className="Difficulty">
            <h2>Choose a difficulty level:</h2>
            <div className="diffbtn">
                <button className="emdbtn" value="difficulty=easy" onClick={changeDifficulty}>
                    Easy
                </button>
                <button className="emdbtn" value="difficulty=medium" onClick={changeDifficulty}>
                    Medium
                </button>
                <button className="emdbtn" value="difficulty=hard" onClick={changeDifficulty}>
                    Difficult
                </button>
                <button className="emdbtn" value="" onClick={changeDifficulty}>
                    Randomized
                </button>
            </div>
        </div>
    );
};

export default Difficulty;
