const bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        userName: 'nelsonabieno',
        firstName: 'Nelson',
        lastName: 'Rotimi',
        email: 'nelsonabieno@gmail.com',
        password: bcrypt.hashSync('nelsonabieno@gmail.com', bcrypt.genSaltSync(8)),
        roleId: '1',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'kaybest15',
        firstName: 'Ifejide',
        lastName: 'Omorotimi',
        email: 'kaybest15@gmail.com',
        password: bcrypt.hashSync('kaybest15@gmail.com', bcrypt.genSaltSync(8)),
        roleId: '1',
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),
  down: queryInterface =>
    queryInterface.bulkDelete('Person', null, {})
};
