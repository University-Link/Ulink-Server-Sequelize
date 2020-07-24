module.exports = (sequelize, DataTypes) => {
  return sequelize.define("schedule", {
    scheduleIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    semester: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    main: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};