"use strict";

const retornoDao = require("../DAO/retorno-dao");

exports.post = async (req, res, next) => {
  try {
    await retornoDao.novo(req.body);
    res.status(201).send({ message: "Retorno cadastrado com sucesso!" });
  } catch (e) {
    res.status(400).send({ message: "Erro ao cadastrar retorno", data: e });
  }
};

exports.listar = async (req, res, next) => {
  try {
    let data = await retornoDao.listar();
    res.status(200).send({ data: data });
  } catch (e) {
    res
      .status(400)
      .send({ message: "Erro ao buscar todos os retornos", data: e });
  }
};

// verifica se o objeto é vazio - sem nenhuma propriedade - ex {}
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
