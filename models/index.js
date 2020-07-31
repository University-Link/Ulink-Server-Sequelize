const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'test';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./userModel')(sequelize, Sequelize);
db.Subject = require('./subjectModel')(sequelize, Sequelize);
db.Cart = require('./cartModel')(sequelize, Sequelize);
db.Schedule = require('./scheduleModel')(sequelize, Sequelize);
db.Schedule_personal = require('./schedule_personalModel')(sequelize, Sequelize);
db.Subject_timeplace = require('./subject_timeplaceModel')(sequelize, Sequelize);
db.Schedule_school = require('./schedule_shcoolModel')(sequelize, Sequelize);
db.Notice = require('./noticeModel')(sequelize, Sequelize);
db.University = require('./universityModel')(sequelize, Sequelize);
db.Board_public = require('./board_publicModel')(sequelize, Sequelize);
db.Board_school = require('./board_schoolModel')(sequelize, Sequelize);
db.Board_subject = require('./board_subjectModel')(sequelize, Sequelize);
db.Comment_public = require('./comment_publicModel')(sequelize, Sequelize);
db.Comment_school = require('./comment_schoolModel')(sequelize, Sequelize);
db.Comment_subject = require('./comment_subjectModel')(sequelize, Sequelize);
db.Like_public = require('./like_publicModel')(sequelize, Sequelize);
db.Like_school = require('./like_schoolModel')(sequelize, Sequelize);
db.Like_subject = require('./like_subjectModel')(sequelize, Sequelize);
db.Comment_like_public = require('./comment_like_publicModel')(sequelize, Sequelize);
db.Comment_like_school = require('./comment_like_schoolModel')(sequelize, Sequelize);
db.Comment_like_subject = require('./comment_like_subjectModel')(sequelize, Sequelize);

/** 1:N User : Schedule */
db.User.hasMany(db.Schedule, { foreignKey: 'userIdx' },);
db.Schedule.belongsTo(db.User, { foreignKey: 'userIdx' },);

/** 1:N University : User */
db.University.hasMany(db.User, { foreignKey: 'universityIdx' },);
db.User.belongsTo(db.University, { foreignKey: 'universityIdx' },);

/** 1:N Schedule : Schedule_personal */
db.Schedule.hasMany(db.Schedule_personal, { foreignKey: 'scheduleIdx' },);
db.Schedule_personal.belongsTo(db.Schedule, { foreignKey: 'scheduleIdx' },);

/** 1:N Schedule : Schedule_school */
db.Schedule.hasMany(db.Schedule_school, { foreignKey: 'scheduleIdx' },);
db.Schedule_school.belongsTo(db.Schedule, { foreignKey: 'scheduleIdx' },);

/** 1:N Subject : Notice */
db.Subject.hasMany(db.Notice, { foreignKey: 'subjectIdx' },);
db.Notice.belongsTo(db.Subject, { foreignKey: 'subjectIdx' },);

/** 1:N User : Notice */
db.User.hasMany(db.Notice, { foreignKey: 'userIdx' },);
db.Notice.belongsTo(db.User, { foreignKey: 'userIdx' },);

/** 1:N Subject : Subject_timeplace */
db.Subject.hasMany(db.Subject_timeplace, { foreignKey: 'subjectIdx' },);
db.Subject_timeplace.belongsTo(db.Subject, { foreignKey: 'subjectIdx' },);

/** N:M User : Subject (Cart) */
db.User.belongsToMany(db.Subject, { through: db.Cart, foreignKey: 'subjectIdx' });
db.Subject.belongsToMany(db.User, { through: db.Cart, foreignKey: 'userIdx' });

/** N:M Schedule : Subject (Schedule_school) */
db.Schedule.belongsToMany(db.Subject, { through: db.Schedule_school, foreignKey: 'subjectIdx' });
db.Subject.belongsToMany(db.Schedule, { through: db.Schedule_school, foreignKey: 'scheduleIdx' });

/** 1:N User : Board_public */
db.User.hasMany(db.Board_public, { foreignKey: 'userIdx' },);
db.Board_public.belongsTo(db.User, { foreignKey: 'userIdx' },);

/** 1:N User : Board_school */
db.User.hasMany(db.Board_school, { foreignKey: 'userIdx' },);
db.Board_school.belongsTo(db.User, { foreignKey: 'userIdx' },);

/** 1:N User : Board_subject */
db.User.hasMany(db.Board_subject, { foreignKey: 'userIdx' },);
db.Board_subject.belongsTo(db.User, { foreignKey: 'userIdx' },);

/** 1:N University : Board_school */
db.University.hasMany(db.Board_school, { foreignKey: 'universityIdx' },);
db.Board_school.belongsTo(db.University, { foreignKey: 'universityIdx' },);

/** 1:N Subject : Board_subject */
db.Subject.hasMany(db.Board_subject, { foreignKey: 'subjectIdx' },);
db.Board_subject.belongsTo(db.Subject, { foreignKey: 'subjectIdx' },);

/** 1:N User : Comment_public */
db.User.hasMany(db.Comment_public, { foreignKey: 'userIdx' },);
db.Comment_public.belongsTo(db.User, { foreignKey: 'userIdx' },);

/** 1:N User : Comment_school */
db.User.hasMany(db.Comment_school, { foreignKey: 'userIdx' },);
db.Comment_school.belongsTo(db.User, { foreignKey: 'userIdx' },);

/** 1:N User : Comment_subject */
db.User.hasMany(db.Comment_subject, { foreignKey: 'userIdx' },);
db.Comment_subject.belongsTo(db.User, { foreignKey: 'userIdx' },);

/** 1:N Board_public : Comment_public */
db.Board_public.hasMany(db.Comment_public, { foreignKey: 'boardIdx' },);
db.Comment_public.belongsTo(db.Board_public, { foreignKey: 'boardIdx' },);

/** 1:N Board_school : Comment_school */
db.Board_school.hasMany(db.Comment_school, { foreignKey: 'boardIdx' },);
db.Comment_school.belongsTo(db.Board_school, { foreignKey: 'boardIdx' },);

/** 1:N Board_subject : Comment_subject */
db.Board_subject.hasMany(db.Comment_subject, { foreignKey: 'boardIdx' },);
db.Comment_subject.belongsTo(db.Board_subject, { foreignKey: 'boardIdx' },);

/** N:M User : Board_public (Like_public) */
db.User.belongsToMany(db.Board_public, { through: db.Like_public, foreignKey: 'boardIdx', });
db.Board_public.belongsToMany(db.User, { through: db.Like_public, foreignKey: 'userIdx' },);

/** N:M User : Board_school (Like_school) */
db.User.belongsToMany(db.Board_school, { through: db.Like_school, foreignKey: 'boardIdx' },);
db.Board_school.belongsToMany(db.User, { through: db.Like_school, foreignKey: 'userIdx' },);

/** N:M User : Board_subject (Like_subject) */
db.User.belongsToMany(db.Board_subject, { through: db.Like_subject, foreignKey: 'boardIdx' },);
db.Board_subject.belongsToMany(db.User, { through: db.Like_subject, foreignKey: 'userIdx' },);

/** N:M User : Comment_public (Comment_like_public) */
db.User.belongsToMany(db.Comment_public, { through: db.Comment_like_public, foreignKey: 'commentIdx' },);
db.Comment_public.belongsToMany(db.User, { through: db.Comment_like_public, foreignKey: 'userIdx' },);

/** N:M User : Comment_school (Comment_like_school) */
db.User.belongsToMany(db.Comment_school, { through: db.Comment_like_school, foreignKey: 'commentIdx' },);
db.Comment_school.belongsToMany(db.User, { through: db.Comment_like_school, foreignKey: 'userIdx' },);

/** N:M User : Comment_subject (Comment_like_subject) */
db.User.belongsToMany(db.Comment_subject, { through: db.Comment_like_subject, foreignKey: 'commentIdx' },);
db.Comment_subject.belongsToMany(db.User, { through: db.Comment_like_subject, foreignKey: 'userIdx' },);

/** N:M User : notice (notice_user) */
db.User.belongsToMany(db.Notice, { through: db.Like_school, foreignKey: 'noticeIdx' },);
db.Notice.belongsToMany(db.User, { through: db.Like_school, foreignKey: 'userIdx' },);

module.exports = db;