const dmsUser = localStorage.getItem('x-access-token');
export default {
  roles: [],
  documents: [],
  user: {
    firstName: dmsUser ? dmsUser.firstName : '',
    lastName: dmsUser ? dmsUser.lastName : '',
    token: dmsUser ? dmsUser.token : '',
    id: dmsUser ? dmsUser.id : '',
    roleId: dmsUser ? dmsUser.roleId : '',
    createdAt: dmsUser ? dmsUser.createdAt : '',
    userName: dmsUser ? dmsUser.userName : '',
    email: dmsUser ? dmsUser.email : '',
    updatedAt: dmsUser ? dmsUser.updatedAt : ''
  }
};
