const usuarioModel = require('../models/usuarioModel');

async function listar(req, res) {
  try {
    const usuarios = await usuarioModel.listar();
    res.status(200).json(usuarios);
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao listar usuários.' });
  }
}

async function criar(req, res) {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e e-mail são obrigatórios.' });
  }
  try {
    const id = await usuarioModel.criar(nome, email);
    res.status(201).json({ id, nome, email });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao criar usuário.' });
  }
}

async function atualizar(req, res) {
  const { nome, email } = req.body;
  if (!nome || !email) {
    return res.status(400).json({ erro: 'Nome e e-mail são obrigatórios.' });
  }
  try {
    await usuarioModel.atualizar(req.params.id, nome, email);
    res.status(200).json({ mensagem: 'Usuário atualizado.' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao atualizar usuário.' });
  }
}

async function remover(req, res) {
  try {
    await usuarioModel.remover(req.params.id);
    res.status(200).json({ mensagem: 'Usuário removido.' });
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao remover usuário.' });
  }
}

module.exports = { listar, criar, atualizar, remover };
