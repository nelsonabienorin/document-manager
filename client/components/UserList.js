import React, { propTypes } from 'react';
import UserListRow from './UserListRow';

function renderList(users) {
  if (!users.rows) {
    return (
     <div className="">
      <h1> No Users </h1>
     </div>
    );
  }
  return (
   <table className="table striped">
    <thead>
     <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Role</th>
     </tr>
   </thead>
   <tbody>

 {users.rows.map((user) =>
       <UserListRow user={user} key={user.id} />
 )}
</tbody>
</table>
  );
}

const UserList = ({ usersList }) => {
  const users = usersList;
  return renderList(users);
};

export default UserList;
