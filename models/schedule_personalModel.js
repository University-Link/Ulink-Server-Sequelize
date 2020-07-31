module.exports = (sequelize, DataTypes) => {
    return sequelize.define("schedule_personal", {
        schedulePersonalIdx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        startTime: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        endTime: {
            type: DataTypes.STRING(10),
        },
        day: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        color: {
            type: DataTypes.INTEGER,
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
    });
};