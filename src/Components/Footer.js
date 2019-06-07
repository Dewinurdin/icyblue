import React from 'react';
import { Col, Row, Navbar } from 'react-bootstrap';
import styled from 'styled-components'

const Styles = styled.div `
  .footer {
    justify-content: center;
    height: auto;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgb(159, 198, 243);
    color: white;
    text-align: center;
    font-family: Raleway;
    padding: .5rem;

    a, p, .brand, .address {
      color: white;
  
      &:hover {
        color: #fff;
      }
    }
    .brand {
      font-size: 1.5rem;
      letter-spacing: 3px;
      font-weight: 900;
      margin-bottom: 1rem;
    }  
    .address {
      font-size: .85rem;
      letter-spacing: 1px;
      font-weight: 500;
      margin-bottom: 0;
    }
    .phone {
      letter-spacing: 1px;
      font-weight: 500;
      margin-bottom: 0;
    }
    .copyright {
      color: white;
      font-size: .75rem;
      margin-top: 10px;
    }
    .divider {
      margin-right: 10px;
      margin-left: 10px;
    }
    .developer {
      color: #fff;
      font-size: .75rem;
    }
    
  }
`;

const d = new Date();
const getYear = d.getFullYear();

const Footer = (props) => (
    <Styles>
      <Navbar className="footer" id="contact">
        <Row>
        <Col xs={12} md={12}>
          <span className="brand">ICY BLUE</span>
          <p className="address">3141 E Broad Street</p>
          <p className="address">Suite. 205</p>
          <p className="address">Mansfield, TX 76063</p>
          <p className="phone">Phone: 817-888-8888</p>
          <span className="copyright">© Copyright {getYear} Icy Blue</span>
          <span className="divider"> | </span>
          <span className="developer">Designed & Maintain by <a href=' https://portfolio-dewi.herokuapp.com/' target='_blank'>Dewi Nurdin</a></span>
        </Col>
        </Row>
      </Navbar>
    </Styles>
)

export default Footer;

