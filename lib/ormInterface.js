class ORMInterface {
    async connect() {
      throw new Error('Method not implemented');
    }
  
    async create(model, data) {
      throw new Error('Method not implemented');
    }
  
    async findAll(model) {
      throw new Error('Method not implemented');
    }
  
    async findById(model, id) {
      throw new Error('Method not implemented');
    }
  
    async update(model, id, data) {
      throw new Error('Method not implemented');
    }
  
    async delete(model, id) {
      throw new Error('Method not implemented');
    }
  }
  
  module.exports = ORMInterface;
  