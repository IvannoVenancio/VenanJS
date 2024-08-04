const Venan = require('./lib/venan');
const { sequelize, User } = require('./lib/database');

module.exports = {
  Venan,
  ORMInterface: require('./lib/ormInterface'),
  PrismaORM: require('./lib/prismaORM'),
  SequelizeORM: require('./lib/sequelizeORM')
};
