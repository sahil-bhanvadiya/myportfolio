import React from "react";
import pfp from './pfp.png'
import { stackList } from "../../data/ProjectData";
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
            Hello! My name is <strong>Sahil Bhanvadiya</strong> and I enjoy
            creating things that live on the internet. My interest in web
            development started recently and I decided to try editing
            custom Blogger themes — redesigning & modifying blogger themes
            taught me a lot about HTML & CSS!
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
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
