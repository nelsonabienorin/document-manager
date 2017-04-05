import React, { propTypes } from 'react';
import {Modal, Button, Row, Input} from 'react-materialize';
import {connect} from 'react-redux';
import { link } from 'react-router';
import UserAction from '../actions/userAction';

class UserListRow extends React.Component{
//= ({user}) => {
constructor (props) {
        super(props);
        const { updateUser } = this.props;
        const { deleteUser } = this.props;
        this.state = {
        id: '',
        firstName:  '',
        lastName: '',
        userName: '',
        email: '',
        roleId: ''
      };
      }
      fieldChange(e) {
        return this.setState({ [e.target.name]: e.target.value,  })
      }
    deleteUser (id) {
      console.log(id, "this is my state");
      this.props.deleteUser(id);
    }
    onSubmit(e){
    console.log('you clicked me ');
    e.preventDefault();
     const id = e.target.id.value;
     const firstName = e.target.firstName.value;
     const lastName = e.target.lastName.value;
     const userName = e.target.userName.defaultValue;
     const email = e.target.email.defaultValue;
     const roleId = e.target.roleId.defaultValue;
     const userDetails = { id, firstName, lastName, userName, email, roleId};
     console.log(userDetails, "userDetails");
    // console.log(this.props, "this.props");
   //  console.log(props, "props");
     this.props.updateUser(userDetails);
  }
  render () {
   const user = this.props.user;
   console.log(user);
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.userName}</td>
            <td>{user.email}</td>
            <td>{user.roleId}</td>
             <Modal
                    header='Edit User'
                    trigger={
                    <td><Button waves='light' className="btn-floating btn-large blue darken-4 right"><i className="large material-icons">mode_edit</i></Button></td>
             }>
              <form className="col s12" method="post" onSubmit={(e) => this.onSubmit(e)} >
                   <Row>
                      <Input s={6}  value="USER ID" />
                      <Input s={6} name = "id" value={user.id} />
                  </Row>
                  <Row>
                      <Input s={6} label="firstName"  name = "firstName" value={this.state.firstName === '' ? user.firstName : this.state.firstName} onChange={(e) => this.fieldChange(e)}  />
                      <Input  s={6} label="lastName" name = "lastName"  value={this.state.lastName === '' ? user.lastName : this.state.lastName} onChange={(e) => this.fieldChange(e)}   />
                  </Row>
                  <Row>
                      <Input s={6} label="userName" name = "userName" value={this.state.userName === '' ? user.userName : this.state.userName} onChange={(e) => this.fieldChange(e)}  />
                      <Input  s={6} label="email" name = "email" label = "email" value={this.state.email === '' ? user.email : this.state.email} onChange={(e) => this.fieldChange(e)}   />
                  </Row>
                  <Row>
                      <Input s={6} label="roleId" name = "roleId" value={this.state.roleId === '' ? user.roleId : this.state.roleId} onChange={(e) => this.fieldChange(e)}  />
                  </Row>

                  <Button className="blue darken-4" waves='light' type="submit">UPDATE</Button>
                </form>
                </Modal>
               <td> <Button waves='light' onClick={(e) => this.deleteUser(user.id)}  className="btn-floating btn-large red darken-2 right"><i className="large material-icons">delete</i></Button></td>
        </tr>
    );
};

  }

const mapDispatchToProps = dispatch => ({
  updateUser: userDetails => dispatch(UserAction.updateUser(userDetails)),
  deleteUser: id => dispatch(UserAction.deleteUser(id))
});

const mapStateToProps = (state) => {
  return {
    userDetails: state.user
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserListRow);


