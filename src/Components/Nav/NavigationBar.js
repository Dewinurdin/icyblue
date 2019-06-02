import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div `
  .navbar {
    background-color: #000;
    justify-content: center;
  }
  a, .navbar-brand, .navbar-nav .nav-link .nav-item {
    color: #bbb;
    padding: 1rem;
    font-family: Raleway

    &:hover {
      color: #fff;
    }
  }
  .nav-item {
    font-size: 0.85rem;
    margin-top: .4rem;
    letter-spacing: 1px;
  }
  .navbar-brand {
    letter-spacing: 3px;
  }
`;



export const NavigationBar = () => (
      <Styles>
        <Navbar fixed="top">
            <Nav.Item>
              <Nav.Link href="#home">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#icecreamrolls">ICE CREAM ROLLS</Nav.Link>
            </Nav.Item>
  
            <Navbar.Brand href="/">ICY BLUE</Navbar.Brand>

            <Nav.Item>
              <Nav.Link href="#poke">POKE BOWL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
            </Nav.Item>
        </Navbar>
      </Styles>
    )

