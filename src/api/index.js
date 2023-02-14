const express = require('express');
const connection = require("../config/database");
const apiRoutes = express.Router({mergeParams: true})

apiRoutes.post('/students', (req, res) => {
    const {id, name, program, term} = req.body;
    connection.query("INSERT INTO `Students` (`id`, `name`, `program`, `classId`) VALUES (?, ?, ?, ?)",
        [id, name, program, classId],
        (err, result) => {
        if (err) {
            return res.status(500).send({
                message: err.message
            });
        }
        return res.send({
            message: "Student Added successfully"
        });
    })
});

apiRoutes.post('/students/delete', (req, res) => {
    const {id} = req.body;
    connection.query('delete from Students where id=?',
        [id],
        (err, result) => {
            if (err) {
                return res.status(500).send({
                    message: err.message
                });
            }
            return res.redirect('/students');
        })
})

// INSERT INTO 'students' ('id', 'name', 'program', 'term') VALUES ('C06', 'Some name', 'MADT', '3');
module.exports = apiRoutes;
