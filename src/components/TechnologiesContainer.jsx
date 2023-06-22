import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiBootstrap,
  DiSass,
  DiReact,
  DiGithubBadge,
} from 'react-icons/di';

import { SiVuedotjs, SiJquery } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "vue", name: "Vue", icon: <SiVuedotjs /> },
  { id: "jquery", name: "Jquery", icon: <SiJquery /> }, 
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },   
  { id: "github", name: "Github", icon: <DiGithubBadge /> },
];

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) =>(
          <div className="technologies-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technologies-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>  
  );  
};

export default TechnologiesContainer
