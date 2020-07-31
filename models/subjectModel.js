module.exports = (sequelize, DataTypes) => {
    return sequelize.define("subject", {
        subjectIdx: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subjectCode: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        nameAtomic: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        professor: {
            type: DataTypes.STRING(45),
        },
        school: {
            type: DataTypes.STRING(45),
        },
        major: {
            type: DataTypes.STRING(50),
        },
        semester: {
            type: DataTypes.STRING(45),
        },
        course: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        grade: {
            type: DataTypes.INTEGER,
        },
        credit: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        people: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        division: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        remarks: {
            type: DataTypes.STRING(200),
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        freezeTableName: true,
    });
};