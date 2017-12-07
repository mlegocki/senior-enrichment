'use strict';

const { db, Students, Campuses } = require('./server/db/models');

const app = require('./server')
const PORT = 9999;
const ft = {force: true};

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('Database synced')
    app.listen(PORT, () => { 
      console.log(`Server is connected and listening on ${PORT}`)
    })
  })
  .catch(err => { 
    console.error('Database is NOT synced');
    console.error(err);
  });
