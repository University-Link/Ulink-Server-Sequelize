module.exports = (sequelize, DataTypes) => {
  return sequelize.define("board_public", {
    boardPublicIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
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