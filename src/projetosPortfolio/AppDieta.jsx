import { NavLink } from "react-router-dom";
import metafit from "../assets/imgs/metafit.png";

export function AppDieta() {
    return (
        <div className="container-detalhes">
            <header className="header-detalhes">
                <NavLink to="/" className="btn-voltar">← Voltar</NavLink>
                <h2>App de Dieta</h2>
            </header>

            <div className="conteudo-projeto">
                <div className="projeto-imagem-grande">
                    <img src={metafit} />
                </div>

                <div className="projeto-info">
                    <h3>Sobre o projeto</h3>

                    <p>
                        App de Dieta com React Native & Gemini 2.0 Aplicativo mobile que gera planos alimentares personalizados em tempo real. O backend em Laravel processa dados biométricos e objetivos do usuário, utilizando a API do Gemini 2.0 Flash (Google) para entregar dietas detalhadas e nutricionalmente equilibradas com altíssima velocidade.
                    </p>

                    <div className="tecnologias">
                        <span>React Native</span>
                    </div>

                    <div className="acoes">

                        <a href="https://github.com/arturnf/metafit-app-react-native" target="_blank" className="btn-github">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
