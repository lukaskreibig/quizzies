import React from "react";
import Select from "react-select";
import { useState } from "react";
import "./Topic.css";

function Topic({ quizCategories }) {
  const [quizTopic, setQuizTopic] = useState([]);

  const newArray = quizCategories.map((category) => {
    return { label: category.name, id: category.id };
  });

  return (
    <div className="Topic">
      <Select options={newArray} />
    </div>
  );
}

export default Topic;

// https://opentdb.com/api.php?amount=10

// &category=22
// &difficulty=easy
