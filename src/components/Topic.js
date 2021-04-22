import React from "react";
import Select from "react-select";
import "./Topic.css";

function Topic({ quizCategories, changeTopic }) {
  const newArray = quizCategories.map((category) => {
    return { value: category.id, label: category.name };
  });
  return (
    <div className="Topic">
      <Select options={newArray} onChange={changeTopic} />
    </div>
  );
}

export default Topic;

// https://opentdb.com/api.php?amount=10

// &category=22
// &difficulty=easy
