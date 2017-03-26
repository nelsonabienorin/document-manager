import React, { PropTypes } from 'react';
import Header from '../components/Header';


class App extends React.Component {
  render() {
    console.log('You just called APP now');
    return (
    <div className="container-fluid">
	  <Header />
	  {this.props.children}
		</div>
  );
  }
}
App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;