import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'
import logo from '../../assets/icy-blue-logo.jpg'

const Styles = styled.div `
  .navbar {
    background-color: rgb(159, 198, 243);
    display: flex;
    width: 100%;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;

    a, .navbar-brand, .navbar-nav .nav-link .nav-item {
      color: #fff;
      font-family: Raleway;

      &:hover {
        color: #fff;
      }
    }
    .nav-item {
      font-size: 0.8rem;
      letter-spacing: 1px;
      font-weight: bold;
      margin-right: 2.5rem;
      margin-left: 2.5rem;

    }

// ----------------------------------------- //
// -------- MEDIA SCREEN ------------------- //
// ----------------------------------------- //

    @media (max-width: 700px) {
      .navbar {
        height: auto;
        justify-content: space-around;
        padding: 0
        margin: 0;
      }
      .icy-blue {
      }
      .logo {
        height: 2.5rem;
        width: 9rem;
      }
      .nav-menu {
        padding: 0.1rem;
      }

      a, .navbar-nav .nav-link .nav-item {
        color: #fff;
        font-family: Raleway;
        font-size: 8px;
        letter-spacing: 0;
        padding: .1rem;
        margin-right: .1rem;

      }
      .navbar-brand {
        // font-size: .75rem;
        // letter-spacing: 0;
      }
      .nav-item {
        margin-right: 1.1rem;
        margin-left: 1.1rem;  
      }
    }
// ----------------------------------------- //
//  ----- END MEDIA SCREEN ---------------- //
// ----------------------------------------- //

`;

const NavigationBar = (props) => (
      <Styles>
        <Navbar className="top-nav" fixed="top">
          <Nav.Item className="icy-blue">
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="300"
                height="75"
                className="d-inline-block align-top logo"
                alt="Icy Blue logo"
              />
            </Navbar.Brand>
          </Nav.Item>
          <Container className="nav-menu">
            <Nav.Item>
              <Nav.Link href="#icecreamrolls">{props.link2}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#poke">{props.link3}</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#map">{props.link4}</Nav.Link>
            </Nav.Item>
          </Container>
        </Navbar>
      </Styles>
    )

export default NavigationBar;

