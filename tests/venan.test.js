import * as chai from 'chai';
import chaiHttp from 'chai-http';

import { Venan } from '../lib/venan.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('VenanJS Framework', () => {
  let app;
  let server;

  before((done) => {
    app = new Venan();
    app.get('/', (req, res) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!');
    });
    server = app.listen(3001, done);
  });

  after((done) => {
    server.close(done);
  });

  it('should respond with Hello, World!', (done) => {
    chai.request('http://localhost:3001')
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});
