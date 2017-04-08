import chai from 'chai';
import request from 'supertest';
import app from '../../config/app';

const superRequest = request.agent(app);
const expect = chai.expect;
describe('ROUTE GET /', () => {
  it('should return a welcome message', (done) => {
    superRequest.get('/').end((err, res) => {
      expect(res.status).to.equal(200);
      done();
    });
  });
  it('should return a message when accessing a wrong route', (done) => {
    superRequest.get('/andela/nelsonabieno').end((err, res) => {
      expect(res.status).to.equal(200);
      done();
    });
  });
});
