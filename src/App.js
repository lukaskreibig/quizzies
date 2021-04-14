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
   .get("https://opentdb.com/api.php?amount=10")
   .then((res) => setQuizArray(res.data.results));
  };

  useEffect(quizFetch, [])
  console.log(quizArray)

  return (
    <div className="App"> 
    </div>
  );
}

export default App;

//https://opentdb.com/api.php?amount=10
//https://opentdb.com/api.php?amount=10&category=22&difficulty=medium