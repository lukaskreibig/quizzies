import React, { useState } from "react";
import StarRating from "./StarRating";

const Contact = () => { 
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
     e.preventDefault();
     setStatus("Sending...");
     const { name, email, message } = e.target.elements;
     let details = {
       name: name.value,
       email: email.value,
       message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>

        <div className="star-feedback">
        <h1>How did you like the game?</h1>
        <StarRating />
        </div>

        <div className="contact-form">
          <h1>Contact Us</h1>

          <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
          </div>

          <div className="email">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
          </div>

          <div className="message">
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
          </div>

          <br></br>
          <button className="submit-button" onClick={() => alert("Thank you for your message")}>submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
