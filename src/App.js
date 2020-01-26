import React from 'react';
import logo from './components/img/triangle2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <p>
          Home
        </p>
        <p>
          WebDev
        </p>
        <p>
          CGI
        </p>
        <p>
          About
        </p>
      </header>

      <div className="Wrapper">
        <div className="text">
        Take A Break And Get Creative
        </div>
        <div className="triangle">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>

      
      <div className="WebDev">
        <div className="textLg">
        Web Development
        </div>
        <div className="textLg">Web Dev Skills:</div>
        <div className="text">
          Programming,
          Design
        </div>
      </div>

      <div className="CGI">
        <div className="textLg">
        Computer Generated Imagery
        </div>
        <div className="text">
        
        </div>
      </div>

      <div className="About">
        <div className="textLg">
        About Me
        </div>
        <div className="text">
        
        </div>
      </div>

      <div className="Footer">
      <div className="text">
      CBT 2020
      </div>
      </div>

    </div>
  );
}

export default App;
