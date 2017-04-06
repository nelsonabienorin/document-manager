import React from 'react';
import TextInput from '../components/TextInput';

const UserForm = ({ user, onSave, onChange, loading, errors }) => (
		<div className="container" style={{ width : 700 }}>
			<div className="z-depth-1 grey lighten-4">
				<form method="POST" className="" style={{ width: '95%', marginLeft: '20px' }}>
					<TextInput
						name="firstname"
						label="firstname"
						defaultvalue={user.firstname}
						onChange={onChange}
						error={errors} />


					<TextInput
						name="lastname"
						label="Lastname"
						defaultvalue={user.lastname}
						onChange={onChange}
						error={errors} />


					<TextInput
						name="username"
						label="username"
						defaultvalue={user.username}
						onChange={onChange}
						error={errors} />


					<TextInput
						name="email"
						label="email"
						defaultvalue={user.email}
						onChange={onChange}
						error={errors} />


					<TextInput
						name="password"
						label="password"
						defaultvalue={user.password}
						onChange={onChange}
						error={errors} />


					<TextInput
						name="roleId"
						label="role"
						defaultvalue={user.roleId}
						onChange={onChange}
						error={errors} />
					<a
						disabled={loading}
						value={loading ? 'saving ...' : 'save'}
						className="btn blue darken-4"
						onClick={onSave} > SignUp </a>
				</form>
			</div>
		</div>
	);

export default UserForm;