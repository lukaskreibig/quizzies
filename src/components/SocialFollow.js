import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


function SocialFollow() {
  return (
    <div class="social-container">
        <a href="https://www.youtube.com/watch?v=be9RJp4f4Pc"
          className="youtube social">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a href="https://twitter.com/" 
        className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://de-de.facebook.com/"
          className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/learnbuildteach"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
  );
};

export default SocialFollow; 