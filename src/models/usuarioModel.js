const pool = require('../config/db');

async function listar() {
  const [rows] = await pool.query('SELECT * FROM usuarios');
  return rows;
}

async function criar(nome, email) {
  const [result] = await pool.query(
    'INSERT INTO usuarios (nome, email) VALUES (?, ?)',
    [nome, email]
  );
  return result.insertId;
}

async function atualizar(id, nome, email) {
  await pool.query(
    'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?',
    [nome, email, id]
  );
}

async function remover(id) {
  await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
}

module.exports = { listar, criar, atualizar, remover };
