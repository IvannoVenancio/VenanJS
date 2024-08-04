const { Sequelize, DataTypes } = require('sequelize');
const ORMInterface = require('./ormInterface');

class SequelizeORM extends ORMInterface {
  constructor() {
    super();
    this.sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: 'database.sqlite'
    });
    this.User = this.sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    });
    this.sequelize.sync();
  }

  async connect() {
    await this.sequelize.authenticate();
  }

  async create(model, data) {
    return this[model].create(data);
  }

  async findAll(model) {
    return this[model].findAll();
  }

  async findById(model, id) {
    return this[model].findByPk(id);
  }

  async update(model, id, data) {
    const instance = await this[model].findByPk(id);
    return instance.update(data);
  }

  async delete(model, id) {
    const instance = await this[model].findByPk(id);
    return instance.destroy();
  }
}

module.exports = SequelizeORM;
