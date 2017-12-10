const apiStudents = require('express').Router();
const { Students } = require('../db/models');


apiStudents.get('/', (req, res, next) => {
    Students.findAll()
        .then(students => res.json(students))
        .catch(next);
});

apiStudents.get('/:studentId', (req, res, next) => {
    Students.findOne({
        where: {
            id: req.params.studentId
        }
    })
        .then(student => res.json(student))
        .catch(next)
});

apiStudents.post('/', (req, res, next) => {
    Students.create(req.body)
        .then(student => res.json(student))
        .catch(next);
});

apiStudents.put('/:studentId', (req, res, next) => {
    Students.findById(req.params.studentId)
        .then(student => student.update(req.body))
        .then(result => res.json(result))
        .catch(next);
});

apiStudents.delete('/:studentId', (req, res, next) => {
    Students.findById(req.params.studentId)
        .then(student => student.destroy())
        .then(() => res.status(204).end())
});

module.exports = apiStudents;