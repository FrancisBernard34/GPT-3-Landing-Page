import React from "react";
import './possibility.css';

import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicite Acesso Antecipado para Começar</h4>
      <h1 className="gradient__text">As possibilidades estão além da sua imaginação</h1>
      <p>O GPT-3 funciona por meio do aprendizado de máquina, o que significa que ele é capaz de aprender a partir de grandes quantidades de dados de treinamento. Isso inclui textos de diversas fontes, como livros, artigos de notícias e páginas da web.</p>
      <h4>Solicite Acesso Antecipado para Começar</h4>
    </div>
  </div>;
};

export default Possibility;
