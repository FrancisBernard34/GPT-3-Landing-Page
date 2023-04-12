import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="O que é GPT-3" text="Com seus impressionantes 175 bilhões de parâmetros, o GPT-3 é capaz de entender e reproduzir a linguagem humana com uma precisão nunca antes vista. Ele pode aprender com exemplos e informações, e usar esse conhecimento para gerar textos, traduções e respostas personalizadas, tornando-se uma ferramenta poderosa para empresas e indivíduos em todo o mundo." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">As possibilidades estão além da sua imaginação</h1>
        <p>Explore a Biblioteca</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Imagine ter um assistente virtual que possa escrever um artigo jornalístico em minutos, ou um chatbot que possa responder a perguntas de clientes com precisão e rapidez. O GPT-3 torna isso possível, e muito mais." />
        <Feature title="Conhecimento" text="Com sua capacidade de aprendizado contínuo, o GPT-3 está mudando a forma como as empresas realizam seus negócios e como as pessoas se comunicam. Ele pode ser usado para análises de dados, pesquisa de mercado, criação de conteúdo e muito mais." />
        <Feature title="Inovação" text="Não é exagero dizer que o GPT-3 é uma das maiores inovações tecnológicas da história recente. Com ele, as possibilidades são infinitas e o futuro parece ainda mais brilhante. Prepare-se para ser surpreendido e deixe-se levar pela revolução da inteligência artificial!" />
      </div>
    </div>
  );
};

export default WhatGPT3;
