module.exports = (sequelize, DataTypes) => {
  return sequelize.define("like_school", {
    likeSchoolIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};