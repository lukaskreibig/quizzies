function Quiz({ quizArray }) {
  return quizArray.length > 0 ? (
    <div className="App">
      <h2> {quizArray[0].question} </h2>
      <button> {quizArray[0].correct_answer} </button>
      {quizArray[0].incorrect_answers.map((answer) => (
        <button> {answer} </button>
      ))}
    </div>
  ) : (
    <div className="App">
      <h2> ...Loading QUIZ...</h2>
      <div></div>
    </div>
  );
}

//https://opentdb.com/api.php?amount=10
//https://opentdb.com/api.php?amount=10&category=22&difficulty=medium
//.replace(/&quot;/g, '\"').replace(/;&#039;/g,"'").replace(/&#039;/g,"'").replace(/&rsquo;/g,"'")
//   decode('&quot;');
//const regex = / /g

// {shuffledAnswers.map((answer) => (
//     <button>{answer}</button>
//   ))}

//   let quizAnswers = [
//     quizArray[0].correct_answer,
//     ...quizArray[0].incorrect_answers,
//   ];
//   console.log(quizAnswers, "unshuffled");

//   let shuffledAnswers = quizAnswers
//     .map((a) => ({ sort: Math.random(), value: a }))
//     .sort((a, b) => a.sort - b.sort)
//     .map((a) => a.value);
//   console.log(shuffledAnswers, "shuffled");

export default Quiz;
