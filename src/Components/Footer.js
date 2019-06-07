import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div `
  .navbar {
    background-color {
      
    }
  }
`;

const NavigationBar = (props) => (
      <Styles>
        <Navbar className="footer">
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

