module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cart', {
        cartIdx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        semester: {
            type: DataTypes.STRING(45),
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