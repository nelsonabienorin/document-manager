import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../actions/userAction';


const Register = ({ saveUser }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.firstname.value;
    const lastName = e.target.lastname.value;
    const userName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    saveUser({ firstName, userName, lastName, email, password });
}
  return ( <main>
      <center>
        <div className="section"></div>
        <h5 className="indigo-text">Create account</h5>
        <div className="section"></div>

        <div className="container">
          <div className="z-depth-1 grey lighten-4 row">

            <form className="col s12" method="post" onSubmit={onSubmit}>
              <div className='row'>
                <div className='col s12'>
                </div>
              </div>

              <div className='row'>
                <div className='input-field col s12'>
                  <input className='validate' type='text' name='firstname' id='firstname' />
                  <label htmlFor='email'>Enter your firstname</label>
                </div>
              </div>


              <div className='row'>
                <div className='input-field col s12'>
                  <input className='validate' type='text' name='lastname' id='lastname' />
                  <label htmlFor='email'>Enter your lastname</label>
                </div>
              </div>


              <div className='row'>
                <div className='input-field col s12'>
                  <input className='validate' type='text' name='username' id='username' />
                  <label htmlFor='email'>Enter your username</label>
                </div>
              </div>


              <div className='row'>
                <div className='input-field col s12'>
                  <input className='validate' type='email' name='email' id='email' />
                  <label htmlFor='email'>Enter your email</label>
                </div>
              </div>

              <div className='row'>
                <div className='input-field col s12'>
                  <input className='validate' type='password' name='password' id='password' />
                  <label htmlFor='password'>Enter your password</label>
                </div>
                <label>
                  <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                </label>
              </div>

              <br />
              <center>
                <div className='row'>
                  <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect indigo'>Signup</button>
                </div>
              </center>
            </form>
          </div>
        </div>
        Already a user? <a href="#!">Login</a>
      </center>

      <div className="section"></div>
      <div className="section"></div>
    </main>
  );
};

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(userActions.saveUser(user))
});

const mapStateToProps = (state, ownProps) => ({
  users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);