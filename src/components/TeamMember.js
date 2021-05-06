import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faLinkedin} from "@fortawesome/free-brands-svg-icons";

import "./about.css";

function TeamMember({memberInfo}){
  return(
      <div className="card">
        <img className="avatar" src={memberInfo.photo} alt= ""/>
        <div className="cardContent">
          <h2>{memberInfo.name}</h2>
          <p>{memberInfo.description}</p>
          <a target="_blank" href={memberInfo.linkedIcon}
            className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
  )
}
  
export default TeamMember

        

