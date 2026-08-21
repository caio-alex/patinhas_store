# 🐾 Patinhas Store

E-commerce de petshop feito em React, com identidade visual própria (azul-marinho + coral) e catálogo, autenticação e checkout consumindo uma API própria.

<img width="1851" height="994" alt="image" src="https://github.com/user-attachments/assets/c75697da-1658-4c46-b71c-09ab425b72d3" />

## Arquitetura

Este repositório contém **só o front-end**. O backend (autenticação, produtos e pedidos, com PostgreSQL) vive num repositório separado:

👉 **API:** https://github.com/caio-alex/Patinhas-Back-End

Os dois se comunicam por HTTP — a API precisa estar rodando (local ou hospedada) para o site funcionar de verdade (login, catálogo, compras).

```
┌─────────────────┐        HTTP        ┌──────────────────────┐
│  Patinhas Store  │  ───────────────▶  │  Patinhas Back-End    │
│  (React, aqui)    │  ◀───────────────  │  (Express + Prisma)   │
└─────────────────┘                    └──────────┬───────────┘
                                                    │
                                             ┌──────▼──────┐
                                             │  PostgreSQL  │
                                             └─────────────┘
```

## 🚀 Funcionalidades

- Catálogo de produtos por categoria, com filtros de preço e tipo
- Autenticação real: cadastro, login e sessão (JWT + refresh token em cookie httpOnly)
- Rotas protegidas (perfil e pedidos exigem login)
- Checkout com preço calculado no servidor (não confia no valor vindo do navegador)
- Carrinho de compras (rascunho local, antes da confirmação)
- Totalmente responsivo

## 🛠️ Tecnologias

- React.js + React Router
- styled-components
- Context API (estado de autenticação)
- Bootstrap (grid/responsividade)

## 📁 Estrutura do projeto

```
src/
├── context/AuthContext.jsx     # estado global de sessão
├── services/api.js             # cliente HTTP central (fala com a API)
├── Components/                 # peças reutilizáveis de UI
│   ├── Header/ Footer/ HeroSection/
│   ├── Produtos/ CardProduto/ Carrinho/
│   └── RotaPrivada/             # bloqueia rota pra quem não está logado
└── Paginas/                     # uma tela por rota
    ├── Home.jsx
    ├── Login.jsx / Cadastro.jsx
    ├── Usuario.jsx / Pedidos.jsx   (rotas protegidas)
    └── CompraProduto.jsx / Compra.jsx
```

## ⚙️ Rodando localmente

1. Suba a API primeiro (veja o README do [repositório do backend](https://github.com/caio-alex/Patinhas-Back-End))
2. Configure o front:

   ```bash
   cp .env.example .env
   # confira se REACT_APP_API_URL aponta pra onde a API está rodando
   ```

3. Instale e rode:

   ```bash
   npm install
   npm start
   ```

O site abre em `http://localhost:3000`.

## Variáveis de ambiente

| Variável              | Descrição                          | Exemplo                  |
|------------------------|-------------------------------------|---------------------------|
| `REACT_APP_API_URL`    | URL onde a API está rodando         | `http://localhost:3333`   |

## Scripts disponíveis

| Comando         | O que faz                              |
|------------------|------------------------------------------|
| `npm start`      | Roda em modo desenvolvimento             |
| `npm run build`  | Gera o build de produção em `build/`     |
| `npm test`       | Roda os testes                           |

## 👤 Autor

**Caio Alexandre** — estudante de Engenharia de Software (FIAP)
[LinkedIn](https://linkedin.com/in/caio-alexandre-b778aa221)
