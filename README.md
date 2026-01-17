# Weather - Desafio Front-end (SEDUH)

Este projeto é uma aplicação de previsão do tempo responsiva, desenvolvida como parte de um desafio técnico para SEDUH. A aplicação reproduz fielmente um design de alta fidelidade , consumindo dados reais de clima e apresentando-os com ícones dinâmicos e horários ajustados ao fuso horário local de cada cidade.

##  Link do Projeto (Deploy)
 **Acesse a aplicação aqui:** [https://desafioseduh.netlify.app/](https://desafioseduh.netlify.app/)

##  Tecnologias Utilizadas

* **Framework:** Next.js 14 (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Material UI
* **Ícones:** Lucide React e imgs
* **Testes:** Jest & React Testing Library
* **Containerização:** Docker

##  Funcionalidades

* **Listagem de Cidades:** Seleção rápida entre cidades pré-definidas (London, Vancouver, Recife e etc).
* **Detalhes do Clima:** Visualização de temperatura atual, mínima, máxima, umidade e velocidade do vento.
* **Previsão por Período:** Dados segmentados por Madrugada, Manhã, Tarde e Noite.
* **Fuso Horário Real:** Horários de nascer (sunrise) e pôr do sol (sunset) calculados com base no timezone da cidade.
* **Ícones Dinâmicos:** Os ícones mudam conforme a condição (Sol, Chuva, Neve) e o horário (Dia/Noite).
* **Design Responsivo:** Layout adaptável para dispositivos móveis e desktops.
* **CI/CD Ready:** Configuração de Docker pronta para deploy.

##  Como Rodar o Projeto

Você pode rodar a aplicação de duas formas: **Localmente** ou via **Docker**.

### Pré-requisitos
* Node.js (v18 ou superior)
* NPM ou Yarn
* Docker (Opcional)

### 1. Instalação Local

```powershell
# Clone este repositório
git clone [https://github.com/carlosqbarbosa/desafio-de-front-end-seduh](https://github.com/carlosqbarbosa/desafio-de-front-end-seduh)

# Entre na pasta
cd desafio-de-front-end-seduh

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
yarn dev

```

Acesse http://localhost:3000 no seu navegador.

### 2. Rodando com Docker 

```powershell
# Construir a imagem
docker build -t weather-app .

# Rodar o container na porta 3000
docker run -p 3000:3000 weather-app

```

Acesse http://localhost:3000 no seu navegador.

##  Rodando os Testes

O projeto possui testes unitários configurados para garantir a integridade dos componentes.

```powershell
# Rodar todos os testes
yarn jest

```

