import React, { useState, useEffect } from 'react';
import logo from './ll.png';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import { TransitionGroup, CSSTransition } from "react-transition-group"; // animate transitions, not really using this rn
import { ParallaxProvider} from 'react-scroll-parallax'; // fancy parallax scroll
import { Waypoint } from 'react-waypoint'; //use this to change background when scrolling between sections
import { useScrollPosition } from '@n8tb1t/use-scroll-position' // use this to detect viewport scroll and intercept in project section
import { HashLink as Link } from 'react-router-hash-link'
import { Layout } from './Layout'

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
  const [percentScrolled, setPercentScrolled] = useState(0)
  const [scrollPos, setScrollPos] = useState(0)

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.y)
    setScrollPos(currPos.y)
  })
  useEffect(() => {
    console.log('thisisworking')
    setPercentScrolled(0)
    console.log(percentScrolled)


  },[scrollPos])
  return (
    <ParallaxProvider>
      <GlobalStyles />
      <Router>
        <Layout />
      </Router>
    </ParallaxProvider>
  );
}



export default App;
