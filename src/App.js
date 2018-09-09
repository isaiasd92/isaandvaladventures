import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import { Parallax, Background } from 'react-parallax';
import MapGL, {NavigationControl} from 'react-map-gl';

// CSS 
import 'react-sticky-header/styles.css';
import './App.css';

// Environment Variables 
import {MAP_TOKEN, MAP_STYLE} from './config';
require ('dotenv').config();

export default class App extends Component {
  state = {
    viewport: {
      latitude: 31.169621,
      longitude: -99.683617,
      zoom: 5,
      bearing: 0,
      pitch: 50,
      width: 400,
      height: 400
    },
    interactionState: {},
    settings: {
      dragPan: true,
      dragRotate: true,
      scrollZoom: true,
      touchZoom: true,
      touchRotate: true,
      keyboard: true,
      doubleClickZoom: true,
      minZoom: 0,
      maxZoom: 20,
      minPitch: 0,
      maxPitch: 85
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _onViewportChange = viewport => this.setState({viewport});

  _onInteractionStateChange = interactionState => this.setState({interactionState});

  _onSettingChange = (name, value) => this.setState({
    settings: {...this.state.settings, [name]: value}
  });

  render() {

    const {viewport, settings} = this.state;

    return (
      <div className="App">
        <div className="Menu">
          <Menu>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
          </Menu>
        </div>
        <div className="banner">
          <Parallax
            bgImage={require('./img/space.jpg')}
            bgImageAlt="Space Image"
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
        <div className="Map">
          <MapGL
            {...viewport}
            {...settings}
            mapStyle={MAP_STYLE}
            onViewportChange={this._onViewportChange}
            onInteractionStateChange={this._onInteractionStateChange}
            mapboxApiAccessToken={MAP_TOKEN} >
              <div style={{position: 'absolute', right: 20, top: 5}}>
                <NavigationControl onViewportChange={this._onViewportChange} />
              </div>
          </MapGL>
        </div>
      </div>
    );
  }
}