import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Parallax, Background } from 'react-parallax';
import ReactMapGL, {NavigationControl} from 'react-map-gl';

/* CSS */
import 'react-sticky-header/styles.css';
import './App.css';

import {MAP_TOKEN, MAP_STYLE} from './config';

require ('dotenv').config();

class App extends Component {
  render() {
    const {updateViewport} = this.props;
    return (
      <div className="App">
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
        <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css' rel='stylesheet' />
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
              <div>
                Use the background component for custom elements
              </div>
              <Background className="custom-bg">
              </Background>
            </Parallax>
          </div>
          <div>
            <ReactMapGL 
              mapStyle={MAP_STYLE}
              width={400}
              height={400}
              latitude={31.169621}
              longitude={-99.683617}
              zoom={3}
              onViewportChange = {(viewport) => {
                const {width, height, latitude, longitude, zoom} = viewport;
              }}
              mapboxApiAccessToken={MAP_TOKEN}
            >
              <div style={{position: 'absolute', right: 0}}>
                <NavigationControl onViewportChange={updateViewport} />
              </div>
            </ReactMapGL>
          </div>
        </body>
      </div>
    );
  }
}

export default App;