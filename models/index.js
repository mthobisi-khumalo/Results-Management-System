const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.dialect,
    operatorsAliases: false,

    define: {
        timestamps: false,
        freezeTableName: true
    },

    pool: {
        max: parseInt(process.env.poolMax),
        min: parseInt(process.env.poolMin),
        acquire: parseInt(process.env.poolAcquire),
        idle: parseInt(process.env.poolIdle)
    }
})

sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error' + err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.score = require('./scoreModel.js')(sequelize, DataTypes)
db.user = require('./userModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })

module.exports = db
