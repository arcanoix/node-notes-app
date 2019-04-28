/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('notas desde la db');
});

module.exports = router;