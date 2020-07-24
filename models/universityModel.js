module.exports = (sequelize, DataTypes) => {
  return sequelize.define('university', {
    universityIdx: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    major: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  })
};