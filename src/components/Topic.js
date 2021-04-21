import React from "react";
import Select from "react-select";
import "./Topic.css";

const topicSelection = [
    { label: "General knowledge", value: "General knowledge" },
    { label: "Books", value: "Books" },
    { label: "Film", value: "Film" },
    { label: "Music", value: "Music" },
    { label: "Television", value: "Television" },
    { label: "Video Games", value: "Video Games" },
    { label: "Sport", value: "Sport" },
    { label: "Geography", value: "Geography" },
    { label: "Arts", value: "Arts" },
];

function Topic() {
    return (
        <div className="Topic">
            <Select options={topicSelection} />
        </div>
    );
}

export default Topic;
