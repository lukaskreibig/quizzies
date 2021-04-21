import React, { useState } from "react";
import StarRating from "./StarRating";
import "./Contact.css";


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
    <div className="Homebody">
        <form onSubmit={handleSubmit}>
      <div>
        <h1>How did you like the game?</h1>
        <StarRating />
        <h1>Contact Us</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
     </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
    <br></br>
    <br></br>
    
    
    </div>
   
  );
};

export default Contact;
