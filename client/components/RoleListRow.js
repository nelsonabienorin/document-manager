import React, { propTypes } from 'react';
import {Modal, Button, Row, Input} from 'react-materialize';
const RoleListRow = ({ role }) => {
  return (
        <tr>
            <td>{role.id}</td>
            <td>{role.title}</td>
            <td>{role.createdAt}</td>
            <td>{role.updatedAt}</td>
            <td><Button waves='light' className="btn-floating btn-large blue darken-4 right"><i className="large material-icons">mode_edit</i></Button></td>
            <td><Button waves='light' className="btn-floating btn-large red darken-2 right"><i className="large material-icons">delete</i></Button></td>
        </tr>
  );
};

export default RoleListRow;