import React from 'react';
import Typist from 'react-typist';
import bgimage from '../img/doc-img.jpg';

const theStyle = {
  backgroundImage: 'url(' + bgimage + ')',
  height:900
};

class HomePage extends React.Component {
  render() {
    return (
    <div style={theStyle}>
      <div className="parallax-container">
      <div id="parallax">
        <Typist className="Typist">
          <h3><p className="ptag white-text"> Get all your documents been managed...</p></h3>
	      </Typist>
	    </div>
	  </div>
    ;
    <div className="section" style={{ backgroundColor: 'rgba(13, 59, 161, 0.38)' }}>
    <div className="row container">
      <h2 className="header">Get Started</h2>
      <p className="white-text text-darken-3 lighten-3">DocMan brings your documents to life with smart editing and styling tools to help you easily format text and paragraphs. Choose from hundreds of fonts, add links, images, and drawings. All for free.</p>
      <a className="waves-effect waves-light btn blue darken-4 white-text">Get Started</a>
    </div>
		</div>
    </div>
    );
  }
}

export default HomePage;
