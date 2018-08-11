'use strict';

const express = require("express");
const router = express.Router();

const retornoController = require('../controllers/retornos');

router.post('/', retornoController.post);
router.get('/', retornoController.listar);

module.exports = router;