module.exports = (sequelize, DataTypes) => {

    const Score = sequelize.define("score", {
        roll: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false       
        },
        dob: {
            type: DataTypes.STRING,
            allowNull: false       
        },
        score: {
            type: DataTypes.INTEGER
        }
    })

    return Score

}