import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaWindows,
  FaBootstrap,
  FaNode,
  FaBitbucket,
  FaCheckCircle,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiStackoverflow,
  SiMysql,
  SiLinux,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiMui,
  SiGraphql,
  SiTypescript,
  SiApollographql,
  SiJest,
} from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    // 🌐 Frontend
    HTML: <SiHtml5 />,
    CSS: <SiCss3 />,
    JavaScript: <DiJavascript1 />,
    TypeScript: <SiTypescript />,
    "React.js": <FaReact />,
    "Next.js": <SiNextdotjs />,
    MUI: <SiMui />,
    Bootstrap: <FaBootstrap />,
    "Tailwind CSS": <SiTailwindcss />,
    "Styled Components": <SiStyledcomponents />,
    Yup: <FaCheckCircle />,

    // 🖥 Backend & Database
    "Node.js": <FaNode />,
    Express: <SiExpress />,
    GraphQL: <SiGraphql />,
    "Apollo Client + Server": <SiApollographql />,
    MongoDB: <DiMongodb />,
    SQL: <SiPostgresql />,
    MySQL: <SiMysql />,

    // ⚙️ Tools & Platforms
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Bitbucket: <FaBitbucket />,
    "Stack Overflow": <SiStackoverflow />,
    "Ubuntu Linux": <SiLinux />,
    Windows: <FaWindows />,
    Jest: <SiJest />, 

    // 💻 Languages
    Python: <FaPython />,
    "C++": <CgCPlusPlus />,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
