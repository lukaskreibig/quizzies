import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'



/*axios
.get("https://foodish-api.herokuapp.com/api/")
.then((res) => setFood(res.data.image))
.catch((err) => console.log(err)); */

function App() {

  const [quizArray, setQuizArray] = useState([]);

 const quizFetch = () => {
   axios
   .get("https://opentdb.com/api.php?amount=10&type=multiple")
   .then((res) => setQuizArray(res.data.results));
  };

  useEffect(quizFetch, [])

  // console.log(quizArray)
  // console.log(quizArray[0].incorrect_answers)
  // console.log(quizArray[0].correct_answer)


  


return (
    quizArray.length > 0 && (
      <div className='App'>
        Question
        <h2> {quizArray[0].question} </h2>
        <button> {quizArray[0].correct_answer} </button>
        {quizArray[0].incorrect_answers.map((answer, index) => (
          <button> {answer[index]} </button>
        ))}
      </div>
    )
  );
}

export default App;