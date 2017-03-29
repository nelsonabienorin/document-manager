import React from 'react';
import Typist from 'react-typist';

class HomePage extends React.Component {
  render() {
    return (
    <div>
      <div className="parallax-container">
      <div id="parallax">
        <Typist className="Typist">
          <h3><p className="ptag"> Get all your documents been managed...</p></h3>
	      </Typist>
	    </div>
	  </div>
    <div className="section blue lighten-1">
    <div className="row container">
      <h2 className="header">Get Started</h2>
      <p className="white-text text-darken-3 lighten-3">DocMan brings your documents to life with smart editing and styling tools to help you easily format text and paragraphs. Choose from hundreds of fonts, add links, images, and drawings. All for free.</p>
      <button className="blue darken-2 white-text"> Get Started</button>
    </div>
		</div>
    </div>
    );
  }
}

export default HomePage;
