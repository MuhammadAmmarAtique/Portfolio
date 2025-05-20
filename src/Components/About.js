import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Ammar Atique</b> and I am from Haripur, Pakistan.
            I'm a <b>MERN stack developer</b> with a <b>Bachelors in Computer Science</b>. <br />
            <br />
            Currently I am looking for a job as a <b>
              web developer
            </b>{" "}
            in IT sector. I love to create original projects with beautiful
            designs, you can check out some of my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="JavaScript" />
        <Skills skill="React.js" />
        <Skills skill="Tailwind CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Styled Components" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Visual Studio Code" />
        <Skills skill="Stackoverflow" />
        <Skills skill="Python" />
        <Skills skill="C++" />
        <Skills skill="Ubuntu Linux" />
        <Skills skill="Windows" />
        <Skills skill="SQL" />
        <Skills skill="MS Sql Server" />
        <Skills skill="MySQL" />
      </div>
    </>
  );
};

export default About;
