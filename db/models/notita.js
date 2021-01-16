module.exports = function (sequelize, DataTypes){
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING(255)
        },
        cuerpo: {
            type: DataTypes.TEXT
        }

    }
    const config ={}
    return sequelize.define('notita', cols, config)
}