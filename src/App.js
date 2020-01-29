import React, { useState, useEffect } from 'react';
import logo from './ll.png';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { TransitionGroup, CSSTransition } from "react-transition-group"; // animate transitions, not really using this rn
import { ParallaxProvider} from 'react-scroll-parallax'; // fancy parallax scroll
import { Waypoint } from 'react-waypoint'; //use this to change background when scrolling between sections
import { HashLink as Link } from 'react-router-hash-link'
import ScrollMaster from './ScrollMaster'

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700&display=swap");
  h2 {
    color:#88DFD5;
    font-family: Roboto Mono;
    letter-spacing: 0.8em;
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight:400;
  }
  p {
    font-size:0.9em;
    line-height:1.5em;
  }
`

function App() {
  return (
    <ParallaxProvider>
      <GlobalStyles />
      <Router>
        <ScrollMaster />
      </Router>
    </ParallaxProvider>
  );
}



export default App;
