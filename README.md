# Portfólio Web de Eduardo Beretta

## 1. Título do Projeto

Portfólio Web Interativo - Plataforma pessoal para apresentação de projetos e habilidades em desenvolvimento web.

## 2. Descrição

### Explicação Clara

O Portfólio Web é uma aplicação de página única (SPA) desenvolvida em React que apresenta os projetos, habilidades e informações profissionais de Eduardo Beretta. A plataforma oferece uma interface moderna, responsiva e interativa, com animações suaves e design atrativo, proporcionando uma experiência imersiva aos visitantes.

### Problema Resolvido

A aplicação resolve a necessidade de centralizar e apresentar de forma profissional e organizada os projetos desenvolvidos, facilitando o contato com potenciais recrutadores, clientes ou colaboradores. Oferece um meio seguro e confiável para compartilhar portfólio, habilidades técnicas e experiências através de uma única plataforma acessível na web.

### Objetivo do Projeto

Criar um portfólio digital interativo que demonstre conhecimentos em desenvolvimento front-end, através de design responsivo, animações fluidas, navegação intuitiva e apresentação clara de projetos. Serve como vitrine profissional e ferramenta de marketing pessoal.

## 3. Funcionalidades

* **Página Inicial (Home)** - Landing page com apresentação visual atrativa do portfólio, com animações de carregamento
* **Galeria de Projetos** - Exibição completa dos projetos desenvolvidos com imagens, descrições, tecnologias utilizadas, ano de desenvolvimento, links para demonstração e repositórios GitHub
* **Página Sobre** - Informações biográficas e profissionais sobre o desenvolvedor
* **Página de Contato** - Formulário interativo para envio de mensagens com integração de email
* **Menu de Navegação** - Menu responsivo com acesso fácil a todas as seções
* **Loader de Carregamento** - Animação de carregamento na inicialização da aplicação
* **Design Responsivo** - Interface adaptável para diferentes tamanhos de tela (desktop, tablet, mobile)
* **Animações Fluidas** - Transições e efeitos visuais utilizando GSAP para melhor experiência do usuário
* **Componentes Reutilizáveis** - Estrutura modular com componentes React bem definidos

## 4. Tecnologias Utilizadas

### Linguagens e Frameworks

* **React** (v19.2.0) - Biblioteca JavaScript para construção de interfaces
* **React Router DOM** (v7.13.0) - Roteamento de páginas na aplicação
* **Vite** (v7.2.4) - Build tool e servidor de desenvolvimento
* **JavaScript (ES6+)** - Linguagem de programação principal
* **CSS3** - Estilização da aplicação

### Bibliotecas e Ferramentas

* **Bootstrap** (v5.3.8) - Framework CSS para design responsivo
* **Bootstrap Icons** (v1.13.1) - Ícones do Bootstrap
* **GSAP** (v3.14.2) - Biblioteca de animações avançadas
* **Swiper** (v12.1.1) - Carrossel e slider responsivo
* **EmailJS** (v3.2.0) - Serviço de envio de emails
* **ESLint** (v9.39.1) - Ferramenta de linting para código JavaScript

### Desenvolvimento

* **Node.js** e **npm** - Gerenciamento de dependências e scripts
* **Vite React Plugin** - Plugin do Vite para React com Fast Refresh

## 5. Estrutura do Projeto

```
portfolioBackEnd/
├── public/                           # Arquivos estáticos públicos
│   ├── font/                        # Fontes da aplicação
│   ├── image/                       # Imagens organizadas por projeto
│   │   ├── pokemon/                # Imagens do projeto Pokédex
│   │   ├── portfolio/              # Imagens do projeto Portfólio V1
│   │   └── prontuario/             # Imagens do projeto Prontuário
│   └── model/                       # Modelos 3D ou outros recursos (não foram utilizados no projeto, talvez no futuro eu utilize)
├── src/
│   ├── App.jsx                     # Componente raiz da aplicação
│   ├── App.css                     # Estilos gerais da aplicação
│   ├── main.jsx                    # Ponto de entrada da aplicação
│   ├── components/                 # Componentes reutilizáveis
│   │   ├── Background/             # Componente de fundo
│   │   ├── Card/                   # Componente de card de projetos
│   │   │   └── dados/
│   │   │       └── dados.json      # Dados dos projetos em JSON
│   │   ├── CardItem/               # Componente individual de projeto
│   │   ├── Loader/                 # Componente de animação de carregamento
│   │   └── Navbar/                 # Barra de navegação
│   ├── pages/                      # Páginas da aplicação
│   │   ├── Home/                   # Página inicial (Index)
│   │   ├── Projects/               # Página de projetos
│   │   ├── Sobre/                  # Página sobre o desenvolvedor
│   │   ├── Contato/                # Página de contato
│   │   └── Menu/                   # Menu de navegação responsivo
│   └── style/                      # Estilos globais
│       ├── global.css              # Estilos globais da aplicação
│       └── CardGlass.css           # Estilos do efeito glassmorphism
├── package.json                    # Dependências e scripts
├── vite.config.js                  # Configuração do Vite
├── eslint.config.js                # Configuração do ESLint
└── README.md                       # Este arquivo

```

### Descrição das Pastas Principais

* **public/** - Contém todos os recursos estáticos (imagens, fontes, modelos) que são servidos diretamente
* **src/components/** - Componentes React reutilizáveis que compõem as páginas
* **src/pages/** - Páginas completas da aplicação, cada uma com sua própria estrutura e estilos
* **src/style/** - Estilos CSS globais compartilhados entre toda a aplicação
* **dados.json** - Arquivo de dados em formato JSON que centraliza informações dos projetos (título, descrição, tecnologias, imagens, links)

## 6. Como Executar o Projeto

### Pré-requisitos

* Node.js (versão 16 ou superior)
* npm ou yarn instalados na máquina
* Git para clonar o repositório

### Instalação de Dependências

1. **Clone o repositório**

```bash
git clone https://github.com/eduardoberettarod/portfolioBackEnd.git
cd portfolioBackEnd
```

2. **Instale as dependências do projeto**

```bash
npm install
```

Aguarde a instalação completa de todas as dependências listadas no arquivo `package.json`.

### Comandos para Execução

**Desenvolver localmente**

```bash
npm run dev
```

A aplicação será iniciada em `http://localhost:5173`. O servidor suporta Hot Module Replacement (HMR), permitindo que as mudanças sejam refletidas em tempo real no navegador.docs: adicionar README completo do portfólio com documentação segura

**Compilar para produção**

```bash
npm run build
```

Cria uma versão otimizada da aplicação na pasta `dist/`. Os arquivos estarão minificados e prontos para deploy.

**Visualizar preview de produção**

```bash
npm run preview
```

Testa localmente como a aplicação se comportará em produção.

**Executar linting**

```bash
npm run lint
```

Verifica o código em busca de erros e inconsistências conforme as regras ESLint configuradas.

## 7. Estrutura de Dados - Projetos

Os projetos são armazenados em `src/components/Card/dados/dados.json` com a seguinte estrutura:

```json
{
  "id": 1,
  "nomeProjeto": "Nome do Projeto",
  "descricaoProjeto": "Descrição detalhada do projeto...",
  "link": "https://link-para-demo.com",
  "ano": "2025 — 2026",
  "github": "https://github.com/usuario/repo",
  "tags": ["React", "CSS", "JS"],
  "img": ["path/para/imagem1.png", "path/para/imagem2.png"],
  "imgLogo": "path/para/logo.svg"
}
```

### Campos Principais

* **id** - Identificador único do projeto
* **nomeProjeto** - Título do projeto
* **descricaoProjeto** - Descrição completa do projeto e seus objetivos
* **link** - URL para acessar o projeto online
* **ano** - Período de desenvolvimento
* **github** - Link do repositório no GitHub
* **tags** - Tecnologias utilizadas no projeto
* **img** - Array de caminhos para imagens do projeto
* **imgLogo** - Caminho para o logo/imagem representativa do projeto

## 8. Componentes Principais

### Navbar
Barra de navegação fixa no topo da página com logo e menu responsivo. Inclui animações com GSAP.

### Menu
Menu responsivo que aparece em dispositivos móveis, oferecendo fácil acesso às seções da aplicação.

### Card
Componente que exibe a lista de projetos em cards visuais, carregando dados do arquivo `dados.json`.

### CardItem
Componente individual que representa um projeto dentro do card, exibindo imagens, descrição e links.

### Loader
Componente de animação exibido no carregamento inicial da aplicação, melhorando a experiência visual.

### Background
Componente de fundo visual que adiciona profundidade e design à aplicação.

## 7. Rotas da Aplicação

A navegação entre páginas é gerenciada pelo React Router DOM:

* `/` ou `/index` - Página inicial (Home)
* `/projetos` - Galeria de projetos
* `/sobre` - Informações sobre o desenvolvedor
* `/contato` - Página de contato com formulário

## 8. Autor

**Eduardo Beretta**

* GitHub: [github.com/eduardoberettarod](https://github.com/eduardoberettarod)
* Email: Disponível no formulário de contato do portfólio
* Portfolio: [Acesse o portfólio ao vivo](https://portfolio-eb-react.vercel.app/)

---
 
**Data da Última Atualização:** 2026

Desenvolvido com React, Vite e muito cuidado com a experiência do usuário.
