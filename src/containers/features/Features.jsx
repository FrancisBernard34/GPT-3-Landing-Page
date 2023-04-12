import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: 'O escritor virtual',
    text: 'O GPT-3 pode ser visto como um escritor virtual, já que é capaz de gerar conteúdo de alta qualidade de forma autônoma. Esse título destaca como essa tecnologia está mudando a forma como produzimos conteúdo, permitindo que escritores e criadores tenham novas ferramentas para explorar suas ideias e expandir suas habilidades.' 
  },
  {
    title: 'O expert em análise de dados',
    text: 'Com sua capacidade de processar grandes quantidades de dados, o GPT-3 está se tornando uma ferramenta importante na análise de dados. Esse título destaca como essa tecnologia está transformando a forma como entendemos as informações e oferecendo novas maneiras de extrair insights e conhecimentos valiosos.' 
  },
  {
    title: 'O professor virtual',
    text: 'O GPT-3 pode ser usado como uma ferramenta educacional para ensinar habilidades e conhecimentos diversos. Esse título enfatiza como essa tecnologia está ajudando a educar pessoas em todo o mundo, oferecendo novas oportunidades de aprendizado para todos os níveis de conhecimento.' 
  },
  {
    title: 'O médico virtual',
    text: 'O GPT-3 pode ser usado como uma ferramenta de diagnóstico para ajudar médicos a avaliar pacientes com maior precisão. Esse título destaca como essa tecnologia está mudando a forma como os médicos trabalham, oferecendo novas oportunidades para diagnósticos mais rápidos e precisos.' 
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">O Futuro é Agora e Você Precisa Apenas Perceber Isso. Dê um passo rumo ao Futuro E Faça Acontecer.</h1>
        <p>Solicite Acesso Antecipado para Começar</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((feature, index) => (
          <Feature title={feature.title} text={feature.text} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Features;
