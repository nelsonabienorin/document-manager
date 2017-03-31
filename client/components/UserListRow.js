import React, { propTypes } from 'react';
import { link } from 'react-router';

const UserListRow = ({user}) => {
  console.log(user,'user list');
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.roleId}</td>
        </tr>
    )
}

export default UserListRow;
