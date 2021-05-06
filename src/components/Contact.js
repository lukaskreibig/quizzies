// import React, { useState } from "react";
import StarRating from "./StarRating";
import { useSpring, animated } from "react-spring";

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

  const howLike = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 100,

    config: {
      duration: 500, // duration for the whole animation form start to end
    },
  });

  const stars = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 500,

    config: {
      duration: 500, // duration for the whole animation form start to end
    },
  });

  const contactUs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 1000,

    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <div className="star-feedback">
          <animated.div style={howLike}>
            <h1 className="rating-title">How did you like the game?</h1>
          </animated.div>
          <animated.div style={stars}>
            <StarRating />
          </animated.div>
        </div>
        <animated.div style={contactUs}>
          <div className="contact-form">
            <h2>Contact Us</h2>

            <table className="table">
              <tr className="name">
                <td className="left-column"></td>
                <td className="right-column">
                  <input
                    className="contact-input"
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </td>
              </tr>
              <tr className="email">
                <td className="left-column"></td>
                <td className="right-column">
                  <input
                    className="contact-input"
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </td>
              </tr>

              <tr className="message">
                <td className="left-column"></td>
                <td className="right-column">
                  <textarea id="message" required placeholder="Message" />
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
        </animated.div>
      </form>
    </div>
  );
};

export default Contact;
