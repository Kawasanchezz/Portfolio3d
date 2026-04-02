import { NavLink } from "react-router-dom";
import chatia from "../assets/imgs/chatia.png";

export function ChatIA() {
  return (
    <div className="container-detalhes">
      <header className="header-detalhes">
        <NavLink to="/" className="btn-voltar">← Voltar</NavLink>
        <h2>Chat com IA</h2>
      </header>

      <div className="conteudo-projeto">
        <div className="projeto-imagem-grande">
          <img src={chatia} />
        </div>

        <div className="projeto-info">
          <h3>Sobre o projeto</h3>

          <p>
            Chat Inteligente com Laravel & OpenAI Sistema de chat funcional que integra o poder do modelo GPT-4 ao ecossistema Laravel. O backend gerencia a comunicação com a API da OpenAI de forma segura e escalável, proporcionando uma experiência de conversação fluida, natural e totalmente automatizada.
          </p>

          <div className="tecnologias">
            <span>Laravel</span>
            <span>PHP</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <div className="acoes">
            <a href="https://arturferreira.com/chat" target="_blank" className="btn-demo">
              Ver Demo
            </a>

            <a href="https://github.com/arturnf/ChatIA" target="_blank" className="btn-github">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
