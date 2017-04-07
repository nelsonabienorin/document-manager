import request from 'supertest';
import chai from 'chai';
import app from '../../config/app';
import db from '../../app/models';
import helper from '../helper/test.helper';

const superRequest = request.agent(app);
const expect = chai.expect;

let newAdminUser, adminToken, regularToken;
const emptyValue = ['userName', 'lastName', 'firstName', 'password', 'email'];
const uniqueField = ['userName', 'email'];
const adminUser = helper.adminUser1;

describe('User API :', () => {
  before((done) => {
    db.Role.bulkCreate([{
      title: 'admin',
      id: 1
    }, {
      title: 'regular',
      id: 2
    }])
      .then((role) => {
        helper.adminUser1.roleId = role[0].id;
        db.User.create(adminUser)
          .then((admin) => {
            newAdminUser = admin.dataValues;
            done();
          });
      });
  });
  after(() => {
    db.Role.destroy({
      where: {}
    });
  });

  describe('New Users', () => {
    describe('Create User', () => {
      it('should create a user', (done) => {
        superRequest.post('/api/users')
          .send(helper.regularUser1)
          .end((error, response) => {
            regularUser = response.body.user;
            expect(response.status).to.equal(201);
            expect(response.body.user.userName)
              .to.equal(helper.regularUser1.userName);
            expect(response.body.user.firstName)
              .to.equal(helper.regularUser1.firstName);
            expect(response.body.user.lastName)
              .to.equal(helper.regularUser1.lastName);
            expect(response.body.user.roleId).to.equal(2);
            done();
          });
      });

      uniqueField.forEach((field) => {
        const uniqueUser = Object.assign({}, helper.firstUser);
        uniqueUser[field] = helper.regularUser1[field];
        it(`should fail when already existing ${field} is supplied`, (done) => {
          superRequest.post('/api/users')
            .send(uniqueUser)
            .end((err, res) => {
              expect(res.status).to.equal(409);
              expect(res.body.message).to
                .equal(`${field} already exists`);
              done();
            });
        });
      });
      emptyValue.forEach((field) => {
        const invalidUser = Object.assign({}, helper.secondUser);
        invalidUser[field] = '';
        it(`should fail when ${field} is invalid`, (done) => {
          superRequest.post('/api/users')
            .send(invalidUser)
            .end((err, res) => {
              expect(res.status).to.equal(400);
              expect(res.body.message).to
                .equal(`Enter a valid ${field}`);
              done();
            });
        });
      });

      it('should fail if password is less than 8', (done) => {
        superRequest.post('/api/users')
          .send(helper.invalidPasswordUser)
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.message)
              .to.equal('Minimum of 8 characters is allowed for password');
            done();
          });
      });

      it('should not allow admin user to sign up', (done) => {
        helper.firstUser.roleId = 1;
        superRequest.post('/api/users')
          .send(helper.firstUser)
          .end((err, res) => {
            expect(res.status).to.equal(403);
            expect(res.body.message).to
              .equal('Permission denied, You cannot sign up as an admin user');
            done();
          });
      });
    });
  });


  describe('Existing users', () => {
    describe('Login /users/login', () => {
      it('should allow admin user to login', (done) => {
        superRequest.post('/api/users/login')
        .send(adminUser)
        .end((err, res) => {
          adminToken = res.body.token;
          expect(res.status).to.equal(200);
          expect(res.body.token).to.not.equal(null);
          expect(res.body.message).to
            .equal('You have successfully logged in');
          done();
        });
      });

      it('should allow other users to login', (done) => {
        superRequest.post('/api/users/login')
        .send(helper.regularUser1)
        .end((err, res) => {
          regularToken = res.body.token;
          expect(res.status).to.equal(200);
          expect(res.body.token).to.not.equal(null);
          expect(res.body.message).to
            .equal('You have successfully logged in');
          done();
        });
      });

      it('should not allow user to update another user record', (done) => {
        updateProfile = { firstName: 'Markafina' };
        superRequest.put(`/api/users/${regularUser1.id}`)
        .send(updateProfile)
        .set({ 'x-access-token': regularToken })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          done();
        });
      });

      it('should not allow unregistered users to login', (done) => {
        superRequest.post('/api/users/login')
        .send(helper.firstUser)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body.message).to
            .equal('Please enter a valid email or password to log in');
          done();
        });
      });

      it('should not allow login with invalid password', (done) => {
        superRequest.post('/api/users/login')
        .send({
          email: newAdminUser.email,
          password: 'invalid'
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body.message).to
            .equal('Please enter a valid email or password to log in');
          done();
        });
      });

      it('should not allow login when email and password is not provided',
      (done) => {
        superRequest.post('/api/users/login')
          .send({})
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body.message).to
              .equal('Please provide your email and password to login');
            done();
          });
      });
    });

    describe('Get all users, GET /users ', () => {
      it('should return verification failed if no token is supply', (done) => {
        superRequest.get('/api/users')
        .set({})
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to
            .equal('Please sign in or register to get a token');
          done();
        });
      });

      it('should return invalid token if token is invalid', (done) => {
        superRequest.get('/api/users')
        .set({
          'x-access-token': 'hello-andela-tia'
        })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          expect(res.body.message).to
            .equal('The token you supplied has expired');
          done();
        });
      });

      it(`should return users own profile,
      when the requester is a regular user`, (done) => {
        superRequest.get('/api/users')
        .set({
          'x-access-token': regularToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to
            .equal('You have successfully retrived all users');
          expect(res.body.users.rows[0].username).to
            .equal(helper.regularUser1.username);
          done();
        });
      });

      it(`should return all users profile,
      when the requester is an admin user`, (done) => {
        superRequest.get('/api/users')
        .set({
          'x-access-token': adminToken
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to
            .equal('You have successfully retrived all users');
          done();
        });
      });
    });
  });
});
