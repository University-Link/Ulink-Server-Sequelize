module.exports = (sequelize, DataTypes) => {
  return sequelize.define("like_public", {
    likePublicIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};