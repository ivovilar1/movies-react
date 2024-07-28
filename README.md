# Projeto movies-react

Esse projeto tem como objetivo o consumo de uma API para exibir os filmes mais populares.

## Para rodar o projeto localmente siga os seguintes passos:
-------------------------------------------------------------
Observação:
* Certifique-se de que tenha o node instalado
-------------------------------------------------------------
 * Clone este repositorio
   
 * É preciso ter uma chave de api publica do TMDb para utilizar no projeto, para conseguir visite o site: https://www.themoviedb.org/documentation/api
   
 * Copie o arquivo ".env.example", cole na raiz do projeto e renome para ".env.local" ou copie o comando:
  ```sh
  cp .env.example .env.local
  ```
 * Com a chave da api em mãos, coloque-a no arquivo que você copiou (.env.local):

   REACT_APP_TMDB_API_KEY="sua_chave_aqui"

 * Execute o comando para instalar as dependencias do projeto:
 ```sh
  npm install
 ```
 * Digite o seguinte comando para iniciar o modo de desenvolvimento:
  ```sh
   npm start
  ```
* Apos o comando anterior, a aplicação irá abrir no navegador. Caso não, abra você pode acessar na seguinte url:
```sh
http://localhost:3000
```
