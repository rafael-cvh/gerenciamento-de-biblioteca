
require("dotenv").config();

const express = require("express");
const { Pool } = require("pg");
const path = require("path");

const app = express();

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/livros", async (req, res) => {
  try {
    const resultado = await db.query(
      "SELECT * FROM livros ORDER BY id DESC"
    );

    res.json(resultado.rows);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao listar livros" });
  }
});

app.post("/livros", async (req, res) => {
  try {
    const { titulo, autor, categoria } = req.body;

    if (!titulo || !autor || !categoria) {
      return res.status(400).json({
        erro: "Preencha todos os campos",
      });
    }

    const resultado = await db.query(
      "INSERT INTO livros (titulo, autor, categoria) VALUES ($1, $2, $3) RETURNING *",
      [titulo, autor, categoria]
    );

    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao cadastrar livro" });
  }
});

app.put("/livros/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, autor, categoria } = req.body;

    const resultado = await db.query(
      "UPDATE livros SET titulo = $1, autor = $2, categoria = $3 WHERE id = $4 RETURNING *",
      [titulo, autor, categoria, id]
    );

    if (resultado.rowCount === 0) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }

    res.json(resultado.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao editar livro" });
  }
});

app.delete("/livros/:id", async (req, res) => {
  try {
    const resultado = await db.query(
      "DELETE FROM livros WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (resultado.rowCount === 0) {
      return res.status(404).json({ erro: "Livro não encontrado" });
    }

    res.json({ mensagem: "Livro excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao excluir livro" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
