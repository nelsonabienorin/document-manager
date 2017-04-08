import faker from 'faker';

const helper = {
  adminRole: {
    id: 1,
    title: 'admin'
  },
  regularRole: {
    id: 2,
    title: 'regular'
  },
  guestRole1: {
    id: 3,
    title: 'guest'
  },
  guestRole2: {
    id: 4,
    title: 'guest111'
  },
  guestRole3: {
    id: 5,
    title: 'guest2'
  },
  samplerole: {
    id: 6,
    title: 'guestSample'
  },
  adminUser1: {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 1
  },
  adminUser2: {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 1
  },
  regularUser1: {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },
  regularUser2: {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },
  firstUser: {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },
  secondUser: {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },
  thirdUser: {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    roleId: 2
  },
  usersArray() {
    const users = [];
    for (let i = 0; i <= 10; i += 1) {
      users.push({
        userName: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        roleId: 2
      });
    }
    return users;
  },
  invalidEmailUser: {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: 'fakemail',
    roleId: 1,
    password: faker.internet.password()
  },
  invalidPasswordUser: {
    userName: faker.internet.userName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    roleId: 2,
    password: 'assword'
  },
  publicDocument: {
    title: faker.company.catchPhrase(),
    content: faker.lorem.paragraph(),
    access: 'public'
  },
  privateDocument: {
    title: faker.company.catchPhrase(),
    content: faker.lorem.paragraph(),
    access: 'private'
  },
  roleDocument: {
    title: faker.company.catchPhrase(),
    content: faker.lorem.paragraph(),
    access: 'role'
  },
  testDocument: {
    title: faker.company.catchPhrase(),
    content: faker.lorem.paragraph(),
  }
};
export default helper;
