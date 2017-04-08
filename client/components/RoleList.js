import React, { propTypes } from 'react';
import RoleListRow from './RoleListRow';


const RoleList = ({ roles }) => (
        <table className="striped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                </tr>
            </thead>
            {console.log(roles,"GGGGGG")}
                {roles.map(role =>
                    <RoleListRow key = {role.id} role = {role}/>
                )}
            <tbody>
            </tbody>
        </table>
    );

export default RoleList;
