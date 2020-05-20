'use strict';

const express = require("express");
const router = express.Router();

const retornoController = require('../controllers/retornos');

router.post('/', retornoController.novo);
router.get('/', retornoController.listar);

module.exports = router;