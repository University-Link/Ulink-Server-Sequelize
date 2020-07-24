module.exports = (sequelize, DataTypes) => {
  return sequelize.define("schedule_school", {
    scheduleSchoolIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    color: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};