# Biblioteca

Sistema de gerenciamento de livros desenvolvido como projeto acadêmico.

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

4. Baixe a imagem da aplicação:
```bash
docker compose pull
```

5. Inicie os containers:
```bash
docker compose up -d
```

6. Acesse http://localhost:3000.

### Imagem Docker

Imagem publicada no Docker Hub:

https://hub.docker.com/r/rafaezzzzzzz/biblioteca

Para baixar diretamente:
```bash
docker pull rafaezzzzzzz/biblioteca:1.0
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

### Autores
Rafael e Arthur.