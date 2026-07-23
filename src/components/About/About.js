import React from "react";
import { stackList } from "../../data/ProjectData";
import {
 
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
         
       </ScrollAnimation>

<div className="AboutBio">
  <ScrollAnimation animateIn="fadeInLeft">
    Hello! My name is <strong>Sneha More</strong>. I am a passionate
    <strong> Full Stack MERN Developer..</strong> and an Information Technology
    student with a strong interest in building modern, responsive, and
    user-friendly web applications. I enjoy transforming ideas into scalable
    digital solutions using <strong>MongoDB, Express.js, React.js, and Node.js</strong>.
  </ScrollAnimation>

  <br /><br />

  <ScrollAnimation animateIn="fadeInLeft">
    Throughout my academic journey, I have developed several web applications
    and completed hands-on projects using React.js, Node.js, Express.js,
    MongoDB, JavaScript, HTML, and CSS. I have also completed a
    <strong> Data Science Internship</strong>, where I worked on machine
    learning models, data analysis, and deploying applications using
    <strong> Streamlit</strong>. In addition, I continuously strengthen my
    problem-solving skills through Java and Data Structures & Algorithms.
  </ScrollAnimation>

  <br /><br />

  <ScrollAnimation animateIn="fadeInLeft">
    I am a quick learner who enjoys collaborating with teams, exploring new
    technologies, and solving real-world challenges through software
    development. My goal is to contribute to innovative projects while growing
    as a Full Stack Developer and creating impactful digital experiences.
    <div className="tagline2">
      I have become confident using the following technologies:
    </div>
  </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
