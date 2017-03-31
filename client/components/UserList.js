import React, { propTypes } from 'react';
import UserListRow from './UserListRow';

function renderList(users) {
  console.log(users, "This is my users");
  if (!users.rows) {
    return (
     <div className="">
      No Users
     </div>
    );
  }
  return (
   <table className="table bordered">
    <thead>
     <tr>
      <th>&nbsp;</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>User Name</th>
      <th>Email</th>
      <th>Roles</th>
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
/* ///

 {users.map((user) =>
       <UserListRow key={user.id} user={user} />
     )}


const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
////
 {users.map(user =>
       <UserListRow key={user.id} user={user} />
     )}
///*/
const UserList = ({ usersList }) => {
  const users = usersList;
  return renderList(users);
};

export default UserList;
