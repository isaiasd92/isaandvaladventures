import React, { Component } from 'react';
import logo from './logo.svg';
import { bubble as Menu } from 'react-burger-menu';
import GoogleMapReact from 'google-map-react';
import './App.css';

class App extends Component {
  static defaultProps = {
    center: {
      lat: 32.897480,
      lng: -97.040443
    },
    zoom: 11
  };
  render() {
    return (
      <div className="App">
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IsaAndValAdventures</h1>
        </header>
        <body>
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}>
            </GoogleMapReact>
          </div>
        </body>
      </div>
    );
  }
}

export default App;