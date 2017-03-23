import chai from 'chai';
import request from 'supertest';
import app from '../../config/app';

const superRequest = request.agent(app);
const expect = chai.expect;
describe('ROUTE GET /', () => {
  it('should return a welcome message', (done) => {
    superRequest.get('/').end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body.message).to.equal('Welcome to Document Manager 1.0');
      done();
    });
  });
  it('should return a message when accessing a wrong route', (done) => {
    superRequest.get('/andela/nelsonabieno').end((err, res) => {
      console.log("STATUS " + res.status);
      console.log("BODY MSG " + res.body.message);
      expect(res.status).to.equal(200);
     // expect(res.body.message).to.equal('Request Page Not Found ');
      done();
    });
  });
});
