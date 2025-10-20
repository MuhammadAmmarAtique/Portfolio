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
            Hi, my name is <b>Ammar Atique</b> and I am from Islamabad,
            Pakistan. I'm a <b>Software Engineer</b> with a{" "}
            <b>Bachelors in Computer Science</b>. <br />
            <br />
            Currently I am working as a{" "}
            <b>Software Engineer at Pixako Technologies</b>. I’m passionate about crafting seamless and visually appealing digital experiences, combining elegant design with powerful functionality. You can check out some of my work
            in the projects section.
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
        {/* Frontend */}
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="JavaScript" />
        <Skills skill="TypeScript" />
        <Skills skill="React.js" />
        <Skills skill="Next.js" />
        <Skills skill="MUI" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind CSS" />
        <Skills skill="Styled Components" />
        <Skills skill="Yup" />

        {/* Backend & Database */}
        <Skills skill="Node.js" />
        <Skills skill="Express" />
        <Skills skill="GraphQL" />
        <Skills skill="Apollo Client + Server" />
        <Skills skill="MongoDB" />
        <Skills skill="SQL" />
        <Skills skill="MySQL" />

        {/* Tools & Platforms */}
        <Skills skill="Git" />
        <Skills skill="GitHub" />
        <Skills skill="Bitbucket" />
        <Skills skill="Stack Overflow" />
        <Skills skill="Ubuntu Linux" />
        <Skills skill="Windows" />

        {/* Programming Languages */}
        <Skills skill="Python" />
        <Skills skill="C++" />
      </div>
    </>
  );
};

export default About;
