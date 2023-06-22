import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

import '../styles/components/informationcontainer.sass';

const InformationContainer = () => {
  return (
        <section id="information">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>(13) 98815-9800</p>
                </div>
            </div>

            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>E-mail</h3>
                    <p className="pequeno">juarez_santos2912@yahoo.com.br</p>
                </div>
            </div>

            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localização</h3>
                    <p>Guarujá - SP</p>
                </div>
            </div>
        </section>
    );  
};

export default InformationContainer
