module.exports = (sequelize, DataTypes) => {
  return sequelize.define("comment_like_school", {
    commentLikeSchoolIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};