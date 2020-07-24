module.exports = (sequelize, DataTypes) => {
  return sequelize.define("comment_school", {
    commentSchoolIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    likeCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
};