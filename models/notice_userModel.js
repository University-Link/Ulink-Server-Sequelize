module.exports = (sequelize, DataTypes) => {
    return sequelize.define("notice", {
        noticeUserIdx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    }, {
        freezeTableName: true,
    });
};