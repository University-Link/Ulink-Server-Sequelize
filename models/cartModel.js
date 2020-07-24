module.exports = (sequelize, DataTypes) => {
  return sequelize.define('cart', {
    cartIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    semester: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  })
};