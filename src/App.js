import React from 'react';
import logo from './components/img/triangle.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home  -  WebDev  -  CGI  - Contact
        </p>
      </header>

      <div className="wrapper">
        <div className="text">
        Take A Break And Get Creative
        </div>
        <div className="triangle">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>

      
      <div className="WebDev">
        <div className="text">
        Web Development
        </div>
        <div className="banner">
        
        </div>
        <div className="text">Web Dev Skills:</div>
        <div className="textsm">
          Programming,
          Design
        </div>
      </div>

      <div className="CGI">
        <div className="text">
        Computer Generated Imiagery
        </div>
        <div className="text">
        
        </div>
      </div>

      <div className="About">
        <div className="text">
        About Me
        </div>
        <div className="text">
        
        </div>
      </div>

      <div className="footer">CBT 2020</div>

    </div>
  );
}

export default App;
