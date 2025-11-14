import { Router } from 'express';
import * as db from '../repository/Cadastro.js';
import { gerarToken } from '../utils/jwt.js';

const endpoints = Router();

endpoints.post('/usuario', async (req, resp) => {
  try {
    const pessoa = req.body;
    const id = await db.cadastrarUsuario(pessoa);
    resp.send({ novoId: id });
  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});

endpoints.post('/login', async (req, resp) => {
  try {
    const pessoa = req.body;
    const usuario = await db.validarUsuario(pessoa);

    if (!usuario)
      return resp.status(401).send({ erro: "Email ou senha incorretos" });

    const token = gerarToken(usuario);

    resp.send({
      usuario,
      token
    });

  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});

export default endpoints;
