
# 🌐 Portfolio 3D Interativo — React Three Fiber

Este projeto é um **portfolio 3D interativo** desenvolvido com **React Three Fiber (R3F)** e **Three.js**, onde o usuário pode explorar um pequeno vilarejo em 3D e interagir com diferentes áreas que representam seções do portfolio, como **Sobre Mim**, **Projetos** e **Contato**.

O objetivo é unir **web moderna + gráficos 3D + interatividade**, criando uma experiência imersiva que vai além de um portfolio tradicional.

---

## 🖼️ Preview

> O usuário controla um personagem em terceira pessoa e explora o ambiente usando teclado (W, A, S, D) ou joystick virtual no mobile.

<img width="1912" height="965" alt="image" src="https://github.com/user-attachments/assets/8ea3b1f6-126a-410d-96c2-93a2bf58a109" />


---

## 🚀 Tecnologias Utilizadas

### Core
- **React 19**
- **Vite** — build rápido e moderno
- **Three.js** — engine 3D
- **React Three Fiber** — renderização 3D declarativa com React

### Ecossistema R3F
- **@react-three/drei**
- **@react-three/postprocessing** — efeitos visuais (bloom)

### Física
- **@react-three/rapier**
- **@dimforge/rapier3d-compat**  
  Utilizado para colisões, gravidade e movimentação física do personagem no mundo 3D.

### Extras
- **detect-gpu** — detecção de capacidade gráfica para adaptar qualidade
- **react-router-dom** — navegação entre seções do portfolio
- **react-joystick-component** — suporte a joystick virtual (mobile)
- **@types/three** — tipagem para melhor DX

---

## 📦 Dependências

```json
{
  "@dimforge/rapier3d-compat": "^0.19.3",
  "@react-three/drei": "^10.7.7",
  "@react-three/fiber": "^9.5.0",
  "@react-three/postprocessing": "^3.0.4",
  "@react-three/rapier": "^2.2.0",
  "@types/three": "^0.182.0",
  "detect-gpu": "^5.0.70",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-joystick-component": "^6.2.1",
  "react-router-dom": "^7.12.0",
  "three": "^0.180.0"
}

```
## 🛠️ Como Rodar Localmente

### Pré-requisitos

- Node.js **18+**
- Git

---

### Passo 1 — Clonar o repositório

```bash
git clone https://github.com/Kawasanchezz/Portfolio3d.git

cd portfolio3d

```

### Passo 2 — Instalar as dependências

```
npm install
```

### Passo 3 — Rodar em ambiente de desenvolvimento

```
npm run dev
```

### Passo 4 — Acessar no navegador

```
http://localhost:5173
```

---

## 🛡️ Segurança (Hardening)

Este projeto foi auditado e fortalecido seguindo as melhores práticas de segurança web:
- **Content Security Policy (CSP)** via meta tag para prevenir XSS.
- **Auditoria de dependências** limpa (0 vulnerabilidades no `npm audit`).
- **Links externos seguros** com `rel="noopener noreferrer"`.
- **Prevenção de exposição de arquivos** via `.gitignore` otimizado.
