module.exports = (sequelize, DataTypes) => {
  return sequelize.define("subject_timeplace", {
    subjectTimeplaceIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};