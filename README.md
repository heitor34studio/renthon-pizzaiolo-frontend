
![logo-png](https://github.com/user-attachments/assets/82e0430f-b09b-4d7c-9f18-76abe6830b10)

# Renthon Pizzaiolo FRONTEND
![JavaScript Badge](https://img.shields.io/badge/JavaScript-ffff00?style=for-the-badge&logo=JavaScript&logoColor=black) ![NodeJS Badge](https://img.shields.io/badge/NodeJS-88cc34?style=for-the-badge&logo=nodedotjs&logoColor=black) ![TypeScrypt Badge](https://img.shields.io/badge/TypeScrypt-387ccc?style=for-the-badge&logo=typescript&logoColor=white) ![React Badge](https://img.shields.io/badge/React-183c54?style=for-the-badge&logo=react&logoColor=white) ![SCSS Badge](https://img.shields.io/badge/scss-fb0960?style=for-the-badge&logo=sass&logoColor=white)

A parte do Frontend do RenthonPizzaiolo é construída com React e Sass, proporcionando uma interface interativa e estilizada para a aplicação de gestão (cozinha). Ele se comunica com a API RESTful do backend para realizar operações de criação, listagem, atualização e exclusão das entidades do projeto.

## Índice 

* [Título e Descrição](#Renthon-Pizzaiolo-BACKEND)
* [Índice](#índice)
* [Funcionalidades do Projeto](#-funcionalidades-do-projeto)
* [Tecnologias Utilizadas](#%EF%B8%8F-técnicas-e-tecnologias-utilizadas)
* [Acesso ao Projeto](#-acesso-ao-projeto)
* [Abrir e Rodar o Projeto](#%EF%B8%8F-abrir-e-rodar-o-projeto)
* [Detalhamento do Código](#-detalhamento-do-código)

## 🔨 Funcionalidades do projeto

O Frontend do Renthon Pizzaiolo oferece as seguintes funcionalidades:

- Geração de Interfaces para interagir com o usuário.
- Interfaces de: login, cadastro de categorias, cadastro de produtos, e detalhamento de pedidos.
- Botão para concluir um Pedido, e outro para log-out.

## ✔️ Técnicas e tecnologias utilizadas

- **`NodeJS`**: Ambiente de execução que permite executar JavaScript no servidor, facilitando o desenvolvimento de aplicações web escaláveis e eficientes.
- **`TypeScript`**: Superset do JavaScript que adiciona tipagem estática, melhorando a segurança do código e a produtividade do desenvolvimento com recursos como autocompletar e verificação de tipos em tempo de compilação.
- **`React`**: Biblioteca JavaScript para construção de interfaces de usuário, permitindo criar componentes reutilizáveis e gerenciar o estado da aplicação de forma eficiente.
- **`Sass`**: Pré-processador CSS que adiciona recursos como variáveis, aninhamento e mixins, facilitando a criação de estilos organizados e reutilizáveis para a aplicação.

## 📁 Acesso ao projeto

Você pode ver o código fonte rodando [aqui](https://renthon-pizzaiolo-frontend.vercel.app).

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto, siga os seguintes passos:

1. Clone o repositório para o seu ambiente local:
    ```sh
    git clone https://github.com/heitor34studio/renthon-pizzaiolo-frontend.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd RenthonPizzaioloFrontend;
    ```

3. Execute o projeto:
    ```sh
    yarn dev
    ```

## Detalhamento do código

O código React fornecido implementa uma interface para gerenciamento de uma pizzaria e seus pedidos.

#### public/
Diretório que guarda imagens que serão utilizadas na interface do usuário.

#### styles/global.scss
Define estilos globais para a aplicação, incluindo reset de margens, variáveis de cores, estilos de botões e links, além de ajustes de fonte responsivos.

#### styles/home.module.css
Define estilos específicos para a página inicial, incluindo layout centralizado, estilos de login, botões, textos e responsividade.

#### src/components/Header/
Componente que renderiza o cabeçalho da aplicação, incluindo navegação entre páginas, logo responsivo e funcionalidade de logout utilizando o contexto de autenticação.

#### src/components/ModalOrder/
Componente que exibe um modal com os detalhes de um pedido, permitindo visualizar itens e concluir o pedido, utilizando o React Modal para a interface.

#### src/components/ui/Button/
Componente de botão reutilizável que exibe um ícone de carregamento quando em estado de loading e renderiza o texto do botão quando não está.

#### src/components/ui/input/
Componentes reutilizáveis para input e textarea que aplicam estilos personalizados e permitem a utilização de propriedades HTML padrão.

#### src/contexts/AuthContext.tsx
Contexto de autenticação que gerencia o estado do usuário, fornece funções para login, logout e cadastro, além de persistir o token usando cookies.

#### src/pages/_app.tsx
Componente principal da aplicação que envolve todas as páginas com o contexto de autenticação e configura o container para exibir notificações toast.

#### src/pages/index.tsx
Página inicial que renderiza o formulário de login, gerencia o estado de autenticação e utiliza o contexto de autenticação para permitir o acesso ao sistema.

#### src/pages/category, dashboard, product, signup
- Category -> Página que permite o cadastro de novas categorias, utilizando um formulário e gerenciando o estado do nome da categoria com feedback de sucesso ao usuário.
- Dashboard -> Página do painel que exibe os últimos pedidos, permitindo visualização detalhada e finalização de pedidos através de um modal interativo.
- Product -> Página para cadastrar novos produtos, incluindo nome, preço, descrição e imagem, com seleção de categoria e validações apropriadas.
- Signup -> Página de cadastro de novos usuários, permitindo inserir nome, email e senha, com validações e feedback visual. Utiliza o contexto de autenticação para gerenciar o registro.

#### services/errors/AuthTokenError.ts
Classe que representa um erro de autenticação de token, lançado quando há problemas com o token de acesso no sistema.

#### services/api e apiClient.ts
Configura o cliente Axios para interagir com a API, incluindo interceptores para gerenciar tokens de autenticação e tratamento de erros.

#### utils/canSSRAuth.ts
Habilita autenticação em páginas com SSR, verificando a presença do token e redirecionando usuários não autenticados para a página de login.

#### utils/canSSRGuest.ts
Permite acesso a páginas apenas para visitantes não autenticados, redirecionando usuários logados para o painel.



### Exemplo de Uso
Ao executar o programa, o usuário acessa a página de login, onde pode também ir para a página de cadastro. Ao logar ele é redirecionado ao Dashboard, onde tem acesso a todos pedidos já feitos, indicando suas designadas mesas. Clicando em cima do pedido se vê os detalhes e itens, além de poder concluir ele. No Header o usuário também pode navegar para as páginas responsáveis por: cadastrar uma nova categoria e cadastrar um novo produto.

---

Este é o README atualizado para o FRONTEND do projeto Renthon Pizzaiolo. Ele fornece uma visão geral do projeto, suas funcionalidades, tecnologias utilizadas e como acessar e rodar o projeto. Para mais detalhes, você pode explorar os arquivos do código fonte mencionados.
