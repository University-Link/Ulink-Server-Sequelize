module.exports = (sequelize, DataTypes) => {
  return sequelize.define("comment_like_subject", {
    commentLikeSubjectIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};