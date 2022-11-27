import React from "react";
import pfp from './pfp.png'
import { stackList, toolList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={pfp}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Sahil Bhanvadiya</strong> and I am a front-end developer with experience working with React.js, Redux, JavaScript, TypeScript, Angular to deliver exceptional customer
            experiences, Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction.
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
          <div className="AboutBio tagline2">
            Tools that I have used throughout development.
          </div>
          <Technologies>
            {toolList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
