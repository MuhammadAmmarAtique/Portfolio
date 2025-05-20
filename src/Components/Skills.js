import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaGitAlt, FaGithub, FaPython, FaWindows, FaBootstrap, FaNode  } from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { SiHtml5, SiCss3, SiTailwindcss, SiStyledcomponents, SiStackoverflow, SiMysql, SiLinux, SiPostgresql, SiExpress } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'HTML': <SiHtml5 />,
        'CSS': <SiCss3 />,
        'JavaScript': <DiJavascript1 />,
        'React.js': <FaReact />,
        'Tailwind CSS': <SiTailwindcss />,
        'Bootstrap': <FaBootstrap />,
        'Styled Components': <SiStyledcomponents />,
        'Git': <FaGitAlt />,
        'Github': <FaGithub />,
        'Express': <SiExpress />,
        'Node': <FaNode />,
        'Stackoverflow': <SiStackoverflow />,
        'Python': <FaPython />,
        'C++': <CgCPlusPlus />,
        'Ubuntu Linux': <SiLinux />,
        'Windows': <FaWindows />,
        'SQL': <SiPostgresql />,  // General SQL icon
        'Mongodb': <DiMongodb />,
        'MySQL': <SiMysql />
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
