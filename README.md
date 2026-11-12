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

1. Clone o repositório.
2. Copie `.env.example` para `.env` e configure as variáveis.
3. Execute:

```bash
docker compose up -d --build
```

4. Acesse http://localhost:3000.

### Persistência

Os dados são armazenados em um volume nomeado do Docker, permitindo que permaneçam salvos mesmo após a remoção dos containers.

### Remoção dos containers (preservando o volume)

```bash
docker compose down
```

### Autores
Rafael e Arthur.