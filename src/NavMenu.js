import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link'
import Logo from './Logo'

const NavContainer = styled.div`
  position:fixed;
  z-index:100;
  top: 0;
  left: 0;
  margin: auto;
  height: 100vh;
`
const NavList = styled.div`
  padding:0 1.5em;
  display:flex;
  flex-direction:column;
  place-content:center;
  text-align:right;
  height: inherit;
`

const NavLink = styled(Link)`
    font-family:Roboto Mono;
    font-weight:bold;
    color:#000000;
    text-decoration:none;
    padding: 1em;
    font-size:0.9em;
    letter-spacing: 0.15em;
`

const NavMenu = (activePage) => {
  return (
    <NavContainer>
      <NavList linkColor='green'>
        <Logo fill='#88DFD5' width='150px' />
        <NavLink smooth to="#about" className="about">.about()</NavLink>
        <NavLink smooth to="#projects" className="projects">.projects()</NavLink>
        <NavLink smooth to="#glossary" className="glossary">.glossary()</NavLink>
        <NavLink smooth to="#resources" className="resources">.resources()</NavLink>
      </NavList>
    </NavContainer>
  );
}

export default NavMenu;
