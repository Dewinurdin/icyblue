import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div `
  .navbar {
    background-color: rgb(159, 198, 243);
    justify-content: center;
    width: 100%;
  }
  .top-nav {
    position: fixed;
  }
  a, .navbar-brand, .navbar-nav .nav-link .nav-item {
    color: #fff;
    padding: 1rem;
    font-family: Raleway;

    &:hover {
      color: #fff;
    }
  }
  .nav-item {
    font-size: 0.8rem;
    margin-top: .4rem;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .navbar-brand {
    letter-spacing: 3px;
    font-weight: bold;
  }
`;

const NavigationBar = (props) => (
      <Styles>
        <Navbar className="top-nav" fixed="top">
            <Nav.Item>
              <Nav.Link href="#content">{props.link1}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#icecreamrolls">{props.link2}</Nav.Link>
            </Nav.Item>
  
            <Navbar.Brand href="/">{props.brand}</Navbar.Brand>

            <Nav.Item>
              <Nav.Link href="#poke">{props.link3}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">{props.link4}</Nav.Link>
            </Nav.Item>
        </Navbar>
      </Styles>
    )

export default NavigationBar;

