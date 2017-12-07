const Sequelize = require('sequelize');
const db = require('../index');

const Students = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    gpa: {
        type: Sequelize.FLOAT,
        allowNull: false,
        validate: {
            min: 0.0,
            max: 4.0
        }
    },
    name: {
        type: Sequelize.VIRTUAL,
        set() {
            this.setDataValue(this.firstName + ' ' + this.lastName);
        }
    }
});

module.exports = Students;