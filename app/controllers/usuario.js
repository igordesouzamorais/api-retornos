"use strict";

const usuarioDao = require("../DAO/usuario-dao");

exports.post = async (req, res, next) => {
  try {
    await usuarioDao.novo(req.body);
    res.status(201).send({ message: "Analista Cadastrado com sucesso!" });
  } catch (e) {
    res.status(500).send({ message: "Falha ao cadastrar usuário", error: e });
  }
};
