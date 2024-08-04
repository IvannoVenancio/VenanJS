const Venan = require('./lib/venan');

module.exports = {
  Venan,
  ORMInterface: require('./lib/ormInterface'),
  PrismaORM: require('./lib/prismaORM'),
  SequelizeORM: require('./lib/sequelizeORM')
};
