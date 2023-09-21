import React from "react";

const PersonalDetails = ()=>{
  const handleclick = function(){
    const dropdown = document.getElementById("details-dropdown");
    dropdown.classList.toggle("dropdown-clicked");
  }
     return (
      <div className="personalDetail">
        <div id="dropdown-div">
        <button className="dropdown-btn" onClick={handleclick}>^</button>
        </div>
        <img src={require("./images/myphoto.jpg")} alt={"dp"} className="myPicture"/>
            <div className="myName">
            <h1 className="title">Aman Singh</h1>
            <span className="short-intro">Web Developer</span>
            </div>
            <div  id="details-dropdown" className="dropdown">
            <hr className="pd-hr"/>
            <div className="email-address">
              <span className="email-title">Email:</span><br/>
              <a href="mailto:amansinghmarch16@gmail.com">amansinghmarch16@gmail.com</a>
              </div>
        <div class="social-media-link">
            <a href="https://github.com/Aman8244" class="contact-links"><img src={require("./images/github.png")} alt="" class="social-logo"/></a>
            <a href="https://www.linkedin.com/in/aman-singh-433240225/" class="contact-links"><img src={require("./images/linkedin.png")} alt="" class="social-logo"/></a>
            <a href="https://www.instagram.com/__a_man_7.0/"  class="contact-links"><img src={require("./images/insta.png")} alt="" class="social-logo"/></a>
        </div>
        </div>
      </div>
     )
}
const About = ()=>{
  const sem = "IV";
    return (
      <div className="about-page">
          <h1>About Me</h1>
          <HR/>
          <p>I am a MERN Stack Web Developer. I enjoy making websites i.e functional and user friendly.
            Currently I'm in {sem}<sup>th</sup> Semester of my college with 76.68% aggregate
             </p>
          <div className="education-div">
          
          <div className="icon-div">
          <img src={require("./images/book.webp")} alt={"book-png"} className="book-png"/> 
            </div>
            <h2>Education</h2>
          <div className="education-details-div">
           <div className="circle-line">
           <div className="line"></div>
            <div className="circle first-circle">
              <div className="inline-circle"></div>
            </div>
            <div className="circle second-circle">
              <div className="inline-circle"></div>
            </div>
           </div>
          <ul>
            <li>
            <h3 className="school-name">Jaipur National University</h3>
           <span className="year">2021-2025</span>
              <br/><span>Bachelor In Technology (CSE)</span>
           
            </li>
            <li>
            <h3 className="school-name">Devasthaly Vidyapeeth</h3>
              <span className="year">2018-2020</span>
              <br/><span>XI<sup>th</sup>-XII<sup>th</sup></span>
            
            </li>
          </ul>
         
          </div>
          </div>
      </div>
     
    )
  }
  const Skills = ()=>{
    return (
      <div className="skills-page">
        <h1>Skills</h1>
        <HR/>
        <div className="prog-lang-div">
        <h3 className="programming-language">React.Js </h3> <span className="percentage">60%</span>
        <div className="bar"><div className="bar-percentage" style={{width:"60%"}}></div></div>
        <h3 className="programming-language">C++ </h3> <span className="percentage">70%</span>
        <div className="bar"><div className="bar-percentage" style={{width:"70%"}}></div></div>
        <h3 className="programming-language">Javascript </h3> <span className="percentage">70%</span>
        <div className="bar"><div className="bar-percentage" style={{width:"70%"}}></div></div>
        <h3 className="programming-language">Node.Js/Express.js </h3> <span className="percentage">60%</span>
        <div className="bar"><div className="bar-percentage" style={{width:"60%"}}></div></div>
        <h3 className="programming-language">HTML  </h3> <span className="percentage">70%</span>
        <div className="bar"><div className="bar-percentage" style={{width:"70%"}}></div></div>
        <h3 className="programming-language">CSS  </h3> <span className="percentage">70%</span>
        <div className="bar"><div className="bar-percentage" style={{width:"70%"}}></div></div>
        <h3 className="programming-language">Python </h3> <span className="percentage">60%</span>
        <div className="bar"><div className="bar-percentage" style={{width:"60%"}}></div></div>
        <br/><br/>
        </div>
        
      </div>
    )
  }
  const Projects = ()=>{
    return (
      <div className="projects">
        <h1>Projects</h1>
        <HR/>
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7079844029785325568/" className="project-name">
        <div className="project-div"><img className="project-image" src={require("./images/ecommerce.png")} alt="project"/><br/><h3 className="project-description">E-Commerce</h3>
        <p>Full Stack Development</p></div>
        </a>
        <a href="https://amansingh-todolist.netlify.app/" className="project-name">
        <div className="project-div"><img className="project-image" src={require("./images/todolist.png")} alt="project"/><br/><h3 className="project-description">To Do List</h3>
        <p>Frontend Development</p></div>
        </a>
        <a href ="https://tictactoe-amansingh.netlify.app/" className="project-name">
        <div className="project-div"><img className="project-image" src={require("./images/Tic-Tac-Toe-Game.png")} alt="project"/><br/><h3 className="project-description">Tic Tac Toe</h3>
        <p>Frontend Development</p></div>
        </a>
        <a href="https://notes-keeper-app-amansingh.netlify.app/" className="project-name">
        <div className="project-div"><img className="project-image" src={require("./images/notes.jpg")} alt="project"/><br/><h3 className="project-description">Notes Keeper</h3>
        <p>Frontend Development</p></div>
        </a>
        <a href="https://github.com/Aman8244/Weather-App" className="project-name">
        <div className="project-div"><img className="project-image" src={require("./images/weather.webp")} alt="project"/><br/><h3 className="project-description">Weather App</h3>
        <p>Backend Development</p></div>
        </a> 
      </div>
    )
  }
  const HR = function(){
    return (
      <hr className="HR"/>
    )
  }
  export {About,Skills,Projects,PersonalDetails}