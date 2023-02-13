const express = require('express');
const connection = require('../config/database');
const viewRoutes = express.Router({mergeParams: true})

viewRoutes.get('/students', (req, res) => {
    connection.query("select * from students", (err, result) => {
        if (err) {
            return res.status(500).send({
                'message' : err.message
            });
        }
        res.render('index', {data: result});
    });
});

viewRoutes.get('', (req, res) => {
    res.redirect('/students')
});

module.exports = viewRoutes;
