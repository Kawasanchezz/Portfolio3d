
# 🌲 3D Immersive Village — Portfolio Interativo

[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-r180-black?logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev/)
[![Status](https://img.shields.io/badge/Status-Produção-success)]()

Um universo digital imersivo onde o portfolio tradicional ganha vida. Desenvolvido com **React Three Fiber** e **Rapier Physics**, este projeto transforma a navegação web em uma exploração de um vilarejo 3D detalhado, permitindo que o usuário "ande" pelas conquistas e habilidades do desenvolvedor.

---

## ✨ A Experiência

Diferente de scrolls estáticos, aqui você é o protagonista. Explore um ambiente vivo com:

<div align="center">
  <img src="https://github.com/user-attachments/assets/8ea3b1f6-126a-410d-96c2-93a2bf58a109" width="100%" alt="Preview do Vilarejo 3D" />
</div>

- **🕹️ Personagem em 3D**: Controle total em 3ª pessoa com animações fluidas.
- **🏡 Exploração Temática**: Áreas distintas para **Projetos**, **Sobre Mim** e **Contato**, integradas organicamente ao mapa.
- **🌿 Ambiente Dinâmico**: Grama interativa, rochas detalhadas e uma vila completa (Casas, Coreto, Torre e Praça).
- **🌍 Física em Tempo Real**: Colisões precisas e gravidade utilizando a engine **Rapier**.
- **📱 Suporte Multiplataforma**: Controles adaptados para Teclado (WASD) e Joystick Virtual para dispositivos móveis.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Core** | `React 19` | UI Reativa e Componentização |
| **3D Engine** | `Three.js` + `R3F` | Renderização e cena 3D |
| **Física** | `Rapier 3D` | Colisões e locomoção |
| **Efeitos** | `Postprocessing` | Bloom, Oclusão Ambiental e Profundidade |
| **Build** | `Vite` | Tooling de alto desempenho |

---

## 🚀 Otimização e Performance

O projeto foi construído pensando em acessibilidade de hardware:

- **GPU Intelligence**: Utiliza `detect-gpu` para ajustar a qualidade gráfica automaticamente de acordo com o hardware do usuário.
- **Lazy Loading**: Assets pesados (.GLB) são carregados sob demanda e gerenciados via **React Suspense**.
- **Asset Preloading**: Modelos críticos são pré-carregados para evitar "pop-ins" durante a exploração.

---

## 🛡️ Segurança e Robustez

Seguindo padrões de nível industrial, a aplicação conta com:

- **Content Security Policy (CSP)**: Proteção rigorosa contra ataques XSS e injeção de scripts maliciosos.
- **Sanitização de Dados**: Implementação de `DOMPurify` e `XSS` para tratar qualquer entrada ou renderização de texto externa.
- **Hardened Links**: Todos os redirecionamentos utilizam `rel="noopener noreferrer"`.
- **Zero Vulns**: Monitoramento constante via `npm audit` para manter 0 vulnerabilidades.

---

## 📂 Como Explorar Localmente

Certifique-se de ter o **Node.js 18+** instalado em sua máquina.

1. **Instale as dependências**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   > Acesse `http://localhost:5173` para entrar no vilarejo.

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).

---

<div align="center">
  Desenvolvido com ☕ e 💻 por <b>Kawasanchezz</b>
</div>
