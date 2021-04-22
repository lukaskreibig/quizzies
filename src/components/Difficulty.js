const Difficulty = ({ changeDifficulty }) => {
  return (
    <div className="Difficulty">
      <h2>Choose a difficulty level:</h2>
      <button value="difficulty=easy" onClick={changeDifficulty}>
        Easy
      </button>
      <button value="difficulty=medium" onClick={changeDifficulty}>
        Medium
      </button>
      <button value="difficulty=hard" onClick={changeDifficulty}>
        Hard
      </button>
      <button value="" onClick={changeDifficulty}>
        Randomized
      </button>
    </div>
  );
};

export default Difficulty;
