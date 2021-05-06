import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function TeamMember({memberInfo}){
  return(
      <div className="cardTeam">
        <img className="avatar" src={memberInfo.photo} alt= ""/>
        <div className="cardContent">
          <div className="texttitle">{memberInfo.name}</div>
          <div className="text2">{memberInfo.description}</div>
          <a target="_blank" href={memberInfo.linkedIcon}
            className="logosAbout">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
            <a target="_blank" href={memberInfo.gitHub}
            className="logosAbout">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>       
        </div>
      </div>
  )
}
  
export default TeamMember

        

