const apiStudents = require('express').Router();
const { Students } = require('../db/models');

apiStudents.get('/', (req, res, next) => {
    Students.findAll()
        .then(students => res.json(students))
        .catch(next);
});

apiStudents.get('/:studentId', (req, res, next) => {
    Students.findOne({
        where: 
        {id: req.params.studentId}
    })
    .then(student => res.json(student))
    .catch(next)
});

apiStudents.post('/', (req, res, next) => {
    res.send('STUDENT POST');
});

apiStudents.put('/:studentId', (req, res, next) => {
    res.send('STUDENT PUT');
});

apiStudents.delete('/:studentId', (req, res, next) => {
    res.send('STUDENT DELETE');
});

module.exports = apiStudents;