const apiCampuses = require('express').Router();
const { Campuses } = require('../db/models');

apiCampuses.get('/', (req, res, next) => {
    Campuses.findAll()
        .then(campuses => res.json(campuses))
        .catch(next);
});

apiCampuses.get('/:campusId', (req, res, next) => {
    Campuses.findOne({
        where: {
            id: req.params.campusId
        }
    })
        .then(campus => res.json(campus))
        .catch(next);
});

apiCampuses.post('/', (req, res, next) => {
    Campuses.create(req.body)
        .then(campus => res.json(campus))
        .catch(next);
});

apiCampuses.put('/:campusId', (req, res, next) => {
    Campuses.findById(req.params.campusId)
        .then(campus => campus.update(req.body))
        .then(result => res.json(result))
        .catch(next);
});



module.exports = apiCampuses;