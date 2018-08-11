'use strict';

const express = require("express");
const router = express.Router();

const usuarioController = require('../controllers/usuario');

router.post('/', usuarioController.post);

module.exports = router;