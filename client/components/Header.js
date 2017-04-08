import React, { PropTypes } from 'react';
import { Link, IndexLink, match} from 'react-router';

const renderIfLoggedIn = () => {
  const token = localStorage.getItem('dms-user');
  if (token) {
    return (
			<ul id="nav-mobile" className=" right hide-on-med-and-down">
				<li>
					<Link to="/createdoc" activeClassName="active" className="right">Add Document</Link>
				</li>
				<li>
					<Link to="/role" activeClassName="active" className="right">Add Role</Link>
				</li>
				<li>
					<Link to="/user" activeClassName="active" className="right">Add User</Link>
				</li>
				<li>
					<Link to="/roles" activeClassName="active" className="right">Roles</Link>
				</li>
				<li>
					<Link to="/register" activeClassName="active" className="right">Users</Link>
				</li>
        <li>
					<Link to="/documents" activeClassName="active" className="right">Documents</Link>
				</li>
				<li>
            <input id="search" placeholder="search here" onChange={(e)=>{searchOnChange(e)}}/>
				</li>
				<li>
					<Link to="/logout" activeClassName="active" className="right">Logout</Link>
				</li>
			</ul>
  );
  }
  return (
		<ul id="nav-mobile" className="right hide-on-med-and-down">
			<li>
				<Link to="/" activeClassName="active" className="right">Home</Link>
			</li>
			<li>
				<Link to="/login" activeClassName="active" className="right">Login</Link>
			</li>
			<li>
				<Link to="/signup" activeClassName="active" className="right">Sign up</Link>
			</li>
		</ul>
  );
};
const Header = () => (
		<nav className="blue darken-4">
			<div className="navbar nav-wrapper">
				<IndexLink to="/" activeClassName="active" className="brand-logo">DocMan 1.0</IndexLink>
				{renderIfLoggedIn()}
			</div>
		</nav>

  );
const searchOnChange = (e) =>{
	return e.target.value;
}
export default Header;