// import React, { useState } from "react";
import StarRating from "./StarRating";

const Contact = () => {
  // const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setStatus("Sending...");
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
    // setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <div className="star-feedback">
          <h1 className="rating-title">How did you like the game?</h1>
          <StarRating />
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>

          <table className="table">
            <tr className="name">
              <td className="left-column">
                <label htmlFor="name">Name:</label>
              </td>
              <td className="right-column">
                <input
                  className="contact-input"
                  type="text"
                  id="name"
                  required
                />
              </td>
            </tr>
            <tr className="email">
              <td className="left-column">
                <label htmlFor="email">Email:</label>
              </td>
              <td className="right-column">
                <input
                  className="contact-input"
                  type="email"
                  id="email"
                  required
                />
              </td>
            </tr>

            <tr className="message">
              <td className="left-column">
                <label htmlFor="message">Message:</label>
              </td>
              <td className="right-column">
                <textarea id="message" required />
              </td>
            </tr>
          </table>

          <br></br>
          <button
            className="submit-button"
            onClick={() => alert("Thank you for your message")}
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
