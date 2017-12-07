'use strict'
const apiRouter = require('express').Router();
const apiStudents = require('./apiStudents');
const apiCampuses = require('./apiCampuses');

const db = require('../db')

apiRouter.use('/students', apiStudents);
apiRouter.use('/campuses', apiCampuses);


module.exports = apiRouter;


// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!


// You can put all routes in this file; HOWEVER, this file should almost be like a table of contents for the routers you create

/*
Routes

GET
- all campuses			DONE
- a campus by id		DONE
- all students			DONE
- a student by id		DONE

POST
- new campus			DONE
- new student			DONE

PUT
- updated student info for one student	DONE
- updated campus info for one campus	DONE

DELETE
- a campus				DONE
- a student				DONE
*/