module.exports = (sequelize, DataTypes) => {
  return sequelize.define("comment_like_public", {
    commentLikePublicIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};