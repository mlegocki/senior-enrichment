const apiCampuses = require('express').Router();
const { Campuses } = require('../db/models'); 

apiCampuses.get('/', (req, res, next) => {
    Campuses.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

apiCampuses.get('/:campusId', (req, res, next) => {
    res.send('CAMPUS ID');
});

apiCampuses.post('/', (req, res, next) => {
    res.send('CAMPUS POST');
});

apiCampuses.put('/:campusId', (req, res, next) => {
    res.send('CAMPUS PUT');
});

apiCampuses.delete('/:campusId', (req, res, next) => {
    res.send('CAMPUS DELETE');
});

module.exports = apiCampuses;