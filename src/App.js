import React, { Component } from 'react';
//import logo from './logo.svg';
import { bubble as Menu } from 'react-burger-menu';
import GoogleMapReact from 'google-map-react';
//import StickyHeader from 'react-sticky-header';
import { Parallax, Background } from 'react-parallax';

/* CSS */
import 'react-sticky-header/styles.css';
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
          {/*
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">IsaAndValAdventures</h1>
          </header>
          */}
          {/*
          <StickyHeader
            header={
              <div className="Header_root App-header banner-image">
                <h1 className="Header_title App-title">IsaAndValAdventures</h1>
              </div>
            }
            >
          </StickyHeader>
          */}
        <body>
          <div>
            <Parallax
              bgImage={require('./img/space.jpg')}
              bgImageAlt="the cat"
              strength={200}
            >
            <h1 className="App-header">IsaAndValAdventures</h1>
              <div style={{ height: '100px'}} />
            </Parallax>
            <Parallax strength={300}>
              <div>Use the background component for custom elements</div>
              <Background className="custom-bg">
              </Background>
            </Parallax>
          </div>
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