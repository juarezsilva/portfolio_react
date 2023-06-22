import SocialNetworks from './SocialNetworks';

import Avatar from '../img/juarez.jpg';

import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';


const sidebar = () => {
  return (
    <aside id="sidebar">
    <img src={Avatar} alt="Juarez Santos" />
    <p className="title">Desenvolvedor Front-End</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="https://drive.google.com/file/d/1sn7sftV6UDVvYcjJYyCXzvZRHqLxUrnF/view?usp=sharing" target="_blank"className="btn">Download currículo</a>
  </aside>
  );  
};

export default sidebar
