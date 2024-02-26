module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey:true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false       
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false       
        }
    })

    return User

}