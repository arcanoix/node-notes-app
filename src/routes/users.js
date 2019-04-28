/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

router.get('/users/signin', (req, res) => {
    res.send('Ingresando a la app');
});

router.get('/users/singup', (req, res) => {
    res.send('formulario de registro');
});

module.exports = router;