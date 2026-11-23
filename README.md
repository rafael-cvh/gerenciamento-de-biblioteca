# Biblioteca

Sistema de gerenciamento de livros desenvolvido como projeto acadêmico, utilizando Node.js, Express, PostgreSQL e Docker Compose.

### Tecnologias
- Node.js e Express
- PostgreSQL
- HTML, CSS e JavaScript
- Docker e Docker Compose

### Funcionalidades

- Cadastrar livros.
- Listar livros.
- Editar livros.
- Excluir livros.
- Exibir a data de cadastro dos livros.
- Impedir o cadastro de livros com títulos duplicados, independentemente do autor.

**Regra de negócio:** a comparação dos títulos ignora diferenças entre letras maiúsculas e minúsculas e espaços no início e no final. Autores e categorias podem se repetir normalmente.

### Como executar

1. Clone o repositório:

```bash
git clone https://github.com/rafael-cvh/gerenciamento-de-biblioteca.git
```

2. Entre na pasta do projeto:

```bash
cd gerenciamento-de-biblioteca
```

3. Copie `.env.example` para `.env` e configure as variáveis de ambiente.

4. Baixe as imagens necessárias:

```bash
docker compose pull
```

5. Inicie os containers:

```bash
docker compose up -d
```

6. Acesse a aplicação:

http://localhost:3000

### Imagem Docker

Imagem da aplicação publicada no Docker Hub:

https://hub.docker.com/r/rafaezzzzzzz/biblioteca

Versão atual: `rafaezzzzzzz/biblioteca:1.2`

Para baixar diretamente:

```bash
docker pull rafaezzzzzzz/biblioteca:1.2
```

### Persistência

Os dados são armazenados em um volume nomeado do Docker (`biblioteca_dados`), permitindo que permaneçam salvos mesmo após a remoção dos containers.

### Remoção dos containers (preservando o volume)

```bash
docker compose down
```

Para iniciar novamente:

```bash
docker compose up -d
```

**Atenção:** o comando `docker compose down -v` também remove o volume nomeado e apaga os dados armazenados nele.

### Autores

Rafael e Arthur.