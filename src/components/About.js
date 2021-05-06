import "./about.css";
import TeamMember from "./TeamMember";

const teamMembers = [
    {
      name: "Isabel",
      photo:  "https://media-exp1.licdn.com/dms/image/C4D03AQEnrE8osXZM4Q/profile-displayphoto-shrink_400_400/0/1568148063945?e=1625702400&v=beta&t=02WqZMxtw2EI8B0_mmMv22_Oi2S4RB_c74tNWrl0GTA",
      description: "Former teacher so she thrives is sharing knowledge and knows it's crucial to practice it. Was born in Mexico lived in Canada and now adapting to Paris",
      gitHub:"",
      linkedIcon: "https://www.linkedin.com/in/isabelmehlmann/",
      
    },
    {
      name: "Guillaume",
      photo: "https://media-exp1.licdn.com/dms/image/C4D03AQFd32H3IO0JNg/profile-displayphoto-shrink_400_400/0/1614540617746?e=1625702400&v=beta&t=ie4P3ArUriFDE5qM8C25-DRx3YDl7b004MogKinVRsE",
      description: "Former teacher so she thrives is sharing knowledge and knows it's crucial to practice it. Was born in Mexico lived in Canada and now adapting to Paris",
      gitHub: "",
      linkedIcon: "https://www.linkedin.com/in/guillaumecojan/",
    },
    {
      name: "Lukas",
      photo: "https://media-exp1.licdn.com/dms/image/C5603AQFlXYSL_ic5aA/profile-displayphoto-shrink_800_800/0/1615720340726?e=1625702400&v=beta&t=rLmAyLSKvyJdod5bEcDQeBqXVZZQaiMUXg_HvsNRMkE",
      description: "Former teacher so she thrives is sharing knowledge and knows it's crucial to practice it. Was born in Mexico lived in Canada and now adapting to Paris",
      gitHub: "https://github.com/lukaskreibig",
      linkedIcon:  "https://www.linkedin.com/in/lukas-kreibig-0513ab208/",
    },
    { 
    name: "Carmen",
    photo :   "https://media-exp1.licdn.com/dms/image/C4D03AQF_mM3xUhIWPQ/profile-displayphoto-shrink_400_400/0/1558116558096?e=1625702400&v=beta&t=CtCb4PbBNyDeCmXnu_LjSYG0zOvK4bH11OPCk_F2dgM",
    description: "Former teacher so she thrives is sharing knowledge and knows it's crucial to practice it. Was born in Mexico lived in Canada and now adapting to Paris",
    gitHub: "",
    linkedIcon: "https://www.linkedin.com/in/makarmeen/"
  }
  ];



const About = () => {
    return (
      <>
        <div className="ourHistory">
          <h1> Team Members </h1>
          </div> 
        <div className="containerCards">
          {teamMembers.map((member)=> <TeamMember memberInfo={member}/>)}
        </div>
      </>
    )
};


export default About; 
