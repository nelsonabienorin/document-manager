import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import * as userActions from '../actions/userAction';
import UserList from '../components/UserList';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.redirectToRolePage = this.redirectToRolePage.bind(this);
  }

  redirectToRolePage() {
    browserHistory.push('/user');
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <UserList usersList={users} />
        <input
          type="submit"
          value="Add new User"
          className="btn waves-effect waves-light blue darken-4"
          onClick={this.redirectToRolePage} />
      </div>

    );
  }
}

User.PropTypes = {
  users: PropTypes.array.isRequired
};


// we map our dispatch to custom saveUser props
const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(userActions.saveUser(user)),
  fetchUsers: () => dispatch(userActions.fetchUsers())
});

const mapStateToProps = (state) => {
  return {
    users: state.user
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
