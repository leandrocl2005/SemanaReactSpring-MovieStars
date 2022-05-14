# ![DevSuperior logo](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/devsuperior-logo-small.png) Semana Spring React
>  *readme.md adaptado do evento original. Backend feito em Django. Todas as aulas em um só readme.md.*

## TRILHA PROFISSIONAL

## Realização
[DevSuperior - Escola de programação](https://devsuperior.com.br)

[![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/ig-icon.png)](https://instagram.com/devsuperior.ig)
[![DevSuperior no Youtube](https://raw.githubusercontent.com/devsuperior/bds-assets/main/ds/yt-icon.png)](https://youtube.com/devsuperior)

## Objetivos do projeto

- Criar projetos backend e frontend

## Checklist

#### Conferir Node (16 LTS) e Yarn

```bash
node -v
yarn -v
```

### Passo: criar projeto ReactJS

- ATENÇÃO: esta será a estrutura de pastas que vamos criar:

![DevSuperior no Instagram](https://raw.githubusercontent.com/devsuperior/bds-assets/main/sds/pastas-dsmovie.png)

```
yarn create react-app frontend --template typescript
```
OU:
```
npx create-react-app frontend --template typescript
```

IMPORTANTE: deletar subpasta .git e passar .gitignore para raiz
- *Lembrete: ver extensões e arquivos ocultos*

### Passo: "limpar" o projeto ReactJS

- Deletar arquivos não usados

### Passo: adicionar Bootstrap e CSS ao projeto
- Bootstrap
```
yarn add bootstrap@5.1.3
```

- Arquivo index.css
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

:root {
  --color-primary: #4D41C0;
}

* {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

html, body {
    background-color: #E5E5E5;
}

a, a:hover {
  text-decoration: none;
  color: unset;
}
```
- Arquivo index.tsx

```
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
```

### Passo: Componente Navbar

ATENÇÃO: no arquivo tsconfig.json: `"baseUrl": "./src"` (reinicie o app)

```js
<header>
    <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            <a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                <div className="dsmovie-contact-container">
                    <GithubIcon />
                    <p className="dsmovie-contact-link">/devsuperior</p>
                </div>
            </a>
        </div>
    </nav>
</header>
```

```css
header {
    height: 60px;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
}

.dsmovie-nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
}

.dsmovie-nav-content h1 {
    font-size: 24px;
    margin: 0;
    font-weight: 700;
}

.dsmovie-contact-container {
    display: flex;
    align-items: center;
}

.dsmovie-contact-link {
    margin: 0 0 0 10px;
    font-size: 12px;
}
```

### Passo: Rotas

- Instalar React Router DOM
```
yarn add react-router-dom@6.2.1 @types/react-router-dom@5.3.2
```

```js
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Passo: Tela de formulário

```js
const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
};
```

```js
<div className="dsmovie-form-container">
    <img className="dsmovie-movie-card-image" src="url" alt="The Witcher" />
    <div className="dsmovie-card-bottom-container">
        <h3>"The Witcher"</h3>
        <form className="dsmovie-form">
            <div className="form-group dsmovie-form-group">
                <label htmlFor="email">Informe seu email</label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group dsmovie-form-group">
                <label htmlFor="score">Informe sua avaliação</label>
                <select className="form-control" id="score">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="dsmovie-form-btn-container">
                <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
            </div>
        </form >
        <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
    </div >
</div >
```

```css
.dsmovie-form-container {
    max-width: 480px;
    margin: 40px auto;
    padding: 20px;
}

.dsmovie-form {
    width: calc(100% - 20px);
}

.dsmovie-form-group {
    margin-bottom: 20px;
}

.dsmovie-form-group label {
    font-size: 12px;
    color: #aaa;
}

.dsmovie-form-btn-container {
    display: flex;
    justify-content: center;
}

.dsmovie-movie-card-image {
    width: 100%;
    border-radius: 8px 8px 0 0;
}

.dsmovie-card-bottom-container {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 20px 10px;
    border-radius: 0 0 8px 8px;
}

.dsmovie-card-bottom-container h3 {
    color: #4A4A4A;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
    min-height: 40px;
}

.dsmovie-btn {
    background-color: var(--color-primary);
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### Passo: Pagination

```js
<div className="dsmovie-pagination-container">
    <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" disabled={true} >
            <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="dsmovie-pagination-button" disabled={false} >
            <Arrow className="dsmovie-flip-horizontal" />
        </button>
    </div>
</div>
```

```css
.dsmovie-pagination-container {
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dsmovie-pagination-box {
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dsmovie-pagination-box form {
    width: 100%;
    display: flex;
}

.dsmovie-pagination-button {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-primary);
    cursor: pointer;
}

.dsmovie-pagination-button svg {
    filter: brightness(0) saturate(100%) invert(26%) sepia(19%) saturate(7395%) hue-rotate(234deg) brightness(89%) contrast(92%);
}

.dsmovie-pagination-button:disabled {
    border: 1px solid #c2c2c2;
    cursor: unset;
}

.dsmovie-pagination-button:disabled svg {
    filter: none;
}

.dsmovie-pagination-container p {
    margin: 0;
    font-size: 12px;
    color: var(--color-primary);
}

.dsmovie-flip-horizontal {
    transform: rotate(180deg);
}
```

### Passo: MovieCard

#### MovieStars

```js
<div className="dsmovie-stars-container">
  <StarFull />
  <StarFull />
  <StarFull />
  <StarHalf />
  <StarEmpty />
</div>
```

```css
.dsmovie-stars-container {
    width: 130px;
    display: flex;
    justify-content: space-between;
}

.dsmovie-stars-container svg {
    width: 22px;
    height: auto;
}
```

#### MovieScore

```js
<div className="dsmovie-score-container">
    <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
    <MovieStars />
    <p className="dsmovie-score-count">{count} avaliações</p>
</div>
```

```css
.dsmovie-score-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dsmovie-score-value {
    margin: 0;
    color: #FFBB3A;
    font-size: 16px;
    font-weight: 700;
}

.dsmovie-score-count {
    font-size: 12px;
    color: #989898;
    margin: 4px 0 10px 0;
}
```

#### MovieCard

```js
<div>
    <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
    <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
    </div>
</div>
```

Passo: Tela de Listagem de filmes
```js
<>
    <Pagination />

    <div className="container">
        <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3 col-12 mb-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-12 mb-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-12 mb-3">
                <MovieCard />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 col-12 mb-3">
                <MovieCard />
            </div>
        </div>
    </div>
    
</>
```

## Backend Django

- Criar ambiente virtual: `python -m venv env`
- Adicionar files no *.gitignore*
- Ativar ambiente virtual:
    - No windows: `. env/Scripts/activate`
    - No linux: `source env/bin/activate`
- Instalar Django: `pip install django`
- Instalar Django Rest Framework: `pip install djangorestframework`
- Adicionar 'rest_framework' em `INSTALLED_APPS`
- Criar projeto: `django-admin startproject core .`
- Criar app: `python manage.py startapp moviescore`
- Adicionar 'moviescore' em `INSTALLED_APPS`
- Criar os modelos Movie e Score.
- Adicionar modelos ao admin:
```python
from django.contrib import admin
from moviescore.models import Movie, Score

# Register your models here.
@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
  list_display = ("title", "count", "score")

@admin.register(Score)
class ScoreAdmin(admin.ModelAdmin):
  list_display = ("user", "movie", "score")
```
- Criar as migrações: `python manage.py makemigrations`
- Executar as migrações: `python manage.py migrate`
- Criar superuser: `python manage.py createsuperuser`
- Fazer os seeds de filmes:
    - Criar uma migration vazia: `python manage.py makemigrations moviescore --empty --name seed_movies`
    - Executar migration: `python manage.py migrate moviescore`
    - Se necessário resetar as migrations do app moviescore: `python manage.py migrate moviescore zero`
    - Se necessário ir para uma migration específica do app moviescore: `python manage.py migrate moviescore XXXX` onde `XXXX` é o número da migration.
- Fazer os seeds de usuários:
    - Criar uma migration vazia: `python manage.py makemigrations moviescore --empty --name seed_users`
    - Executar migration: `python manage.py migrate moviescore`
- Fazer os seeds de scores:
    - Criar uma migration vazia: `python manage.py makemigrations moviescore --empty --name seed_scores`
    - Executar migration: `python manage.py migrate moviescore`
- Criar a view (GET) de listagem de filmes.
- Configurar paginação para a view de Listagem de filmes.
- Criar a view (POST) de criação de avaliação do filme.
- Criar url para listagem de filmes.
- Criar url para criação de avaliação do filme:
    - Se usuário com e-mail fornecido não existir, criar usuário
    - Atualizar contador de avaliações do filme
    - Atualizar nota média de avaliações do filme
- Configurar o cors

## DJANGO + REACT (integração)

- Listar filmes do backend:
    - Incluir score corretamente (outro componente)
    - Incluir contagem de avaliações corretamente  (outro componente)
    - Incluir estrelas corretamente
    - Incluir paginação
    - Incluir ordenação (ordem alfabética)
- Carregar pagina de formulário corretamente:
    - Incluir dados do filme a ser avaliado (url Params)
- Enviar formulário

## Como executar este projeto?

As instruções são para execução em ambiente de desenvolvimento.

- Na pasta backend:
```
python -m venv env
. env/Scripts/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

- Na pasta frontend:
```
yarn
yarn start
```
