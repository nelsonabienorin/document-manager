
import request from 'supertest';
import chai from 'chai';
import app from '../../config/app';
import db from '../../app/models/';
import helper from '../helper/test.helper';

const superRequest = request.agent(app);
const expect = chai.expect;

const adminParams = helper.firstUser;
const adminRoleParams = helper.adminRole;
const regularRoleParams = helper.regularRole;
const regularUserParams = helper.regularUser1;

let adminToken, regularToken, role;

describe('ROLE API', () => {
  before((done) => {
    db.Role.create(regularRoleParams)
    .then((newRole) => {
      regularUserParams.roleId = newRole.id;
     // console.log(regularUserParams);
      db.User.create(regularUserParams)
      .then(() => {
        superRequest.post('/users/login')
        .send(regularUserParams)
        .end((err, res) => {
         // console.log(res.body.token);
          regularToken = res.body.token;
          done();
        });
      });
    });
  });
  after(() => db.Role.destroy({ where: {} }));

  describe('USER', () => {
    it('should not allow regular user to create role', (done) => {
      superRequest.post('/roles')
        .send(regularRoleParams)
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          expect(res.status).to.equal(403);
          expect(res.body.message).to.equal('You are not permitted to perform this action');
          done();
        });
    });
  });
});
