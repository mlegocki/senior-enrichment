const Sequelize = require('sequelize');
const db = require('../index');

const Campuses = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.TEXT,
        defaultValue: ''
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

module.exports = Campuses;