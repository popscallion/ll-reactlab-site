import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import About from './About'
import Projects from './Projects'
import Glossary from './Glossary'
import Resources from './Resources'
import NavMenu from './NavMenu'

export default function Layout({scrollPercentage}){
  const heightRef = useRef()
  const [dimensions, setDimensions] = useState({width:0,height:0})
  useLayoutEffect(()=>{
    setDimensions(heightRef.current.getBoundingClientRect())
  },[heightRef.current])
  console.log(dimensions)
//
//   useEffect(() => {
//     window.scrollTo(0, scrollPercentage)
// },[scrollPercentage])

  return(
    <div ref={heightRef}>
      <Grid>
          <Nav>
            <NavMenu />
          </Nav>
          <Pages>
            <About />
            <div></div>
            // work in layout and scrollmaster. use state not ref becasue I do want to trigger a rerender
            // get heights of subsections in scrollmaster
            <Projects />
            <div></div>
            <Glossary />
            <div></div>
            <Resources />
          </Pages>
      </Grid>
    </div>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "lside nav rside"
    "lside content rside"
    "footer footer footer";
  grid-template-columns: 250px 1fr 100px;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;  width: 100%;
  height: 100vh;
  width: 100vw;
`
const Nav = styled.div`
  grid-area: lside;
`
const Pages = styled.div`
  grid-area: content;
`
