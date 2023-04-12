import React from "react";
import { Article } from "../../components";
import {blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          O setor está em constante mudança, Nós estamos comentando sobre.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Abr. 26, 2023" title="GPT-3 e Open  AI - Vamos explorar até os mínimos detalhes?" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Abr. 26, 2023" title="GPT-3 e Open  AI - O futuro das IAs" />
          <Article imgUrl={blog03} date="Abr. 26, 2023" title="GPT-3 e Open  AI - É realmente seguro?" />
          <Article imgUrl={blog04} date="Abr. 26, 2023" title="GPT-3 e Open  AI - Um papo sobre o livre acesso a informação" />
          <Article imgUrl={blog05} date="Abr. 26, 2023" title="GPT-3 e Open  AI - É um risco ao seu emprego?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
