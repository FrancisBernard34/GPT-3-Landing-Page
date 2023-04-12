import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Você quer dar um passo à frente dos outros?
        </h1>
      </div>

      <div className="gpt3__footer-button">
        <p>Solicite Acesso Antecipado</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Brazil, Todos os Direitos Reservados</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Eventos</p>
          <p>Redes Sociais</p>
          <p>Gráficos</p>
          <p>Contato</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Empresa</h4>
          <p>Termos e Condições</p>
          <p>Política de Privacidade</p>
          <p>Contato</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Entre em contato</h4>
          <p>Brazil</p>
          <p>085-132567</p>
          <p>test@only.net</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. Todos os direitos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
