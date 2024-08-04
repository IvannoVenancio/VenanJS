const { PrismaClient } = require('@prisma/client');
const ORMInterface = require('./ormInterface');

class PrismaORM extends ORMInterface {
  constructor() {
    super();
    this.prisma = new PrismaClient();
  }

  async connect() {
    await this.prisma.$connect();
  }

  async create(model, data) {
    return this.prisma[model].create({ data });
  }

  async findAll(model) {
    return this.prisma[model].findMany();
  }

  async findById(model, id) {
    return this.prisma[model].findUnique({ where: { id: parseInt(id, 10) } });
  }

  async update(model, id, data) {
    return this.prisma[model].update({
      where: { id: parseInt(id, 10) },
      data
    });
  }

  async delete(model, id) {
    return this.prisma[model].delete({
      where: { id: parseInt(id, 10) }
    });
  }
}

module.exports = PrismaORM;
