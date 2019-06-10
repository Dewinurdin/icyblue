import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components'
import logo from '../../assets/icy-blue-logo.jpg'

const Styles = styled.div `
  .navbar {
    background-color: rgb(159, 198, 243);
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    text-align: center;
  
  .top-nav {
    position: fixed;
  }

  a, .navbar-brand, .navbar-nav .nav-link .nav-item {
    color: #fff;
    padding: .2rem;
    font-family: Raleway;
    margin-right: 5rem;
    

    &:hover {
      color: #fff;
    }
  }
  .nav-item {
    font-size: 0.8rem;
    // margin-top: .4rem;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .navbar-brand {
    font-size: 3rem;
    // letter-spacing: 3px;
    font-weight: 900;
    color: #1854FD;
    font-family: Comic Sans MS;
  }

// ----------------------------------------- //
// -------- MEDIA SCREEN ------------------- //
// ----------------------------------------- //

    @media (max-width: 700px) {
      .navbar {
        height: auto;
      }
      a, .navbar-nav .nav-link .nav-item {
        color: #fff;
        font-family: Raleway;
        font-size: 8px;
        letter-spacing: 0;
        padding: .1rem;
        margin-right: 0.2rem;
      }
      .navbar-brand {
        font-size: .75rem;
        letter-spacing: 0;
      }
      .top-nav {
        padding: 0;
      }    
    }
// ----------------------------------------- //
//  ----- END MEDIA SCREEN ---------------- //
// ----------------------------------------- //

}


`;

const NavigationBar = (props) => (
      <Styles>
        <Navbar className="top-nav" fixed="top">
            <Navbar.Brand href="/">
            <img
              src={logo}
              width="300"
              height="75"
              className="d-inline-block align-top"
              alt="Icy Blue logo"
            />
            </Navbar.Brand>
            <Nav.Item>
              <Nav.Link href="#icecreamrolls">{props.link2}</Nav.Link>
            </Nav.Item>
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

