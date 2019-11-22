const Sequelize = require('sequelize');
const db =require('../database/db');

module.exports = db.sequelize.define(
    'videogames',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gameName:{
            type: Sequelize.STRING
        },
        developer:{
            type: Sequelize.STRING
        }
    },{timestamps: false}
)