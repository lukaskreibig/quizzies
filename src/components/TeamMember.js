
import "./about.css";

function TeamMember({memberInfo}){
    return (
    <div className="card">
      <img className="avatar" src={memberInfo.photo} alt= ""/>
      <div className="cardContent">
      <h2>        {memberInfo.name}          </h2>
     <p>        {memberInfo.description}     </p>
 
 <a href="#" title="LinkedIn" class="btn btn-linkedin btn-lg"><i class="fa fa-linkedin fa-fw"></i> </a>
 </div>
      </div>
      
    )
  
  }
  
export default TeamMember

        

