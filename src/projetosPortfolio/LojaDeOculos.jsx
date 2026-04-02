import { NavLink } from "react-router-dom";
import LojaOculos from "../assets/imgs/LojaDeOculos.png";

export function LojaDeOculos() {
  return (
    <div className="container-detalhes">
      <header className="header-detalhes">
        <NavLink to="/" className="btn-voltar">← Voltar</NavLink>
        <h2>Loja de Óculos</h2>
      </header>

      <div className="conteudo-projeto">
        <div className="projeto-imagem-grande">
          <img src={LojaOculos} />
        </div>

        <div className="projeto-info">
          <h3>Sobre o projeto</h3>

          <p>
            E-commerce de Óculos com Dashboard Administrativo Catálogo digital robusto desenvolvido em Laravel, focado em conversão via WhatsApp. O sistema elimina a complexidade de gateways de pagamento, unindo um carrinho funcional a um painel administrativo completo para gestão de estoque, categorias e cupons, oferecendo métricas em tempo real para o lojista.
          </p>

          <div className="tecnologias">
            <span>Laravel</span>
            <span>PHP</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <div className="acoes">
            <a href="https://lojalisboa.com.br/" target="_blank" className="btn-demo">
              Ver Demo
            </a>

            <a href="https://github.com/arturnf/Loja-de-oculos" target="_blank" className="btn-github">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
