import React from "react";
import Select from "react-select";
import { useState } from "react";
import "./Topic.css";

function Topic({ quizCategories }) {
  const [quizTopic, setQuizTopic] = useState([]);

  const newArray = quizCategories.map((category) => {
    return { value: category.id, label: category.name };
  });
  return (
    <div className="Topic">
      <Select
        options={newArray}
        onChange={(event) => setQuizTopic(event.value)}
      />
    </div>
  );
}

export default Topic;

// https://opentdb.com/api.php?amount=10

// &category=22
// &difficulty=easy
