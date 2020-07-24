module.exports = (sequelize, DataTypes) => {
  return sequelize.define("like_subject", {
    likeSubjectIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};