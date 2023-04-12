import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Vamos Construir algo Incrível com GPT-3 OpenAI</h1>
        <p>O GPT-3 é a mais recente e poderosa criação da inteligência artificial, um sistema de linguagem natural que está revolucionando a forma como os humanos interagem com a tecnologia. Desenvolvido pela OpenAI, este sistema é capaz de escrever textos, responder perguntas e realizar tarefas complexas, tudo de forma autônoma e surpreendente.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Seu Endereço de Email" />
          <button type="button">Comece Agora</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 pessoas solicitaram acesso nas últimas 24 horas</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
