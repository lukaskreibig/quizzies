import "./about.css";
import TeamMember from "./TeamMember";

const teamMembers = [
    {
      name: "Isabel",
      photo:  "https://media-exp1.licdn.com/dms/image/C4D03AQEnrE8osXZM4Q/profile-displayphoto-shrink_400_400/0/1568148063945?e=1625702400&v=beta&t=02WqZMxtw2EI8B0_mmMv22_Oi2S4RB_c74tNWrl0GTA",
      description: "Born in Germany has lived in the UK fantastic mother of 1 feels encourages and inspires her  her daughter to learn new things every day. Fun, general geography, anything just as long as she keeps the hunger for learning alive.",
      linkedIcon: "https://www.linkedin.com/in/isabelmehlmann/",
      
    },
    {
      name: "Guillaume",
      photo: "https://media-exp1.licdn.com/dms/image/C4D03AQFd32H3IO0JNg/profile-displayphoto-shrink_400_400/0/1614540617746?e=1625702400&v=beta&t=ie4P3ArUriFDE5qM8C25-DRx3YDl7b004MogKinVRsE",
      description: "French man who recently took up the challenge to move transfer the family  with his 2 under 10 years old from Paris, France to Moscow. Loves learning and teaching his sons about  cultures and ways of life. ",
      linkedIcon: "https://www.linkedin.com/in/guillaumecojan/",
    },
    {
      name: "Lukas",
      photo: "https://media-exp1.licdn.com/dms/image/C5603AQFlXYSL_ic5aA/profile-displayphoto-shrink_800_800/0/1615720340726?e=1625702400&v=beta&t=rLmAyLSKvyJdod5bEcDQeBqXVZZQaiMUXg_HvsNRMkE",
      description: "Our artist at storytelling with fantastic photographs has travelled around the world learning about it just to captur seconds but with the amazing challenge of showing the views chapters of the story behind it. He is a cat and nature enthusiast.",
      linkedIn:  "https://www.linkedin.com/in/lukas-kreibig-0513ab208/",
    },
    { 
    name: "Carmen",
    photo :   "https://media-exp1.licdn.com/dms/image/C4D03AQF_mM3xUhIWPQ/profile-displayphoto-shrink_400_400/0/1558116558096?e=1625702400&v=beta&t=CtCb4PbBNyDeCmXnu_LjSYG0zOvK4bH11OPCk_F2dgM",
    description: "Former teacher so she thrives is sharing knowledge and knows it's crucial to practice it. Was born in Mexico lived in Canada and now adapting to Paris",
    linkedIn: "https://www.linkedin.com/in/makarmeen/"
  }
  ];



const About = () => {
    return (
      <div className="ourHistory">
        <h1> Our Story </h1>
        <p> We wanted to create an interactive situation where users could learn and practice knowledge from different topics. Having fun while being challenged. For those routine moments of the day.  </p>
        {teamMembers.map((member)=> <TeamMember memberInfo={member}/>)}
      </div>
    )
};


export default About; 
