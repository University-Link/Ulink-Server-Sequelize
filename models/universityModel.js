module.exports = (sequelize, DataTypes) => {
    return sequelize.define('university', {
        universityIdx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        major: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        initial: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        freezeTableName: true,
    })
};