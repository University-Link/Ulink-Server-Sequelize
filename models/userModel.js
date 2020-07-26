module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        userIdx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(45),
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        salt: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            unique: true,
        },
        phone: {
            type: DataTypes.STRING(50),
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        check: { // 학교 인증 했는지 안했는지
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
        },
        refresh_token: {
            type: DataTypes.STRING(500),
        },
        fcm_token: {
            type: DataTypes.STRING(3000),
        },
        profileImage: {
            type: DataTypes.STRING(200),
        },
        gender: {
            type: DataTypes.STRING(30),
        },
    }, {
        freezeTableName: true,
        timestamps: true,
    });
};