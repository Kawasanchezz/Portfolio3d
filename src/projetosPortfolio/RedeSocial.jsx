import { NavLink } from "react-router-dom";
import redeSocial from "../assets/imgs/redeSocial.jpg";

export function RedeSocial() {
    return (
        <div className="container-detalhes">
            <header className="header-detalhes">
                <NavLink to="/" className="btn-voltar">← Voltar</NavLink>
                <h2>Rede Social</h2>
            </header>

            <div className="conteudo-projeto">
                <div className="projeto-imagem-grande">
                    <img src={redeSocial} />
                </div>

                <div className="projeto-info">
                    <h3>Sobre o projeto</h3>

                    <p>
                        Rede Social Completa com Laravel: Plataforma social robusta focada em interações em tempo real e privacidade. Desenvolvida em Laravel, a aplicação gerencia desde a autenticação segura com confirmação de e-mail até sistemas complexos de seguidores, perfis privados, postagens com fotos e notificações dinâmicas via banco de dados, garantindo uma experiência profissional e escalável.
                    </p>

                    <div className="tecnologias">
                        <span>Laravel</span>
                        <span>PHP</span>
                        <span>HTML</span>
                        <span>CSS</span>
                    </div>

                    <div className="acoes">
                        <a href="https://unifypic.site/login" target="_blank" className="btn-demo">
                            Ver Demo
                        </a>

                        <a href="https://github.com/arturnf/rede-social" target="_blank" className="btn-github">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
