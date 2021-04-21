import { useState, useEffect } from "react";
import axios from "axios";

function Quiz() {
  const [quizArray, setQuizArray] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://opentdb.com/api.php?amount=10&type=multiple"
      );
      setQuizArray(result.data.results);
    };
    fetchData();
  }, []);

  console.log(quizArray);

  return quizArray.length > 0 ? (
    <div>
      <h2> {quizArray[0].question} </h2>
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

export default Quiz;
