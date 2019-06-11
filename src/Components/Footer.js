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
    position: fixed;

    a, p, .brand, .address {
      color: white;
  
      &:hover {
        color: #fff;
      }
    }
    .address, .phone {
      font-size: .8rem;
      letter-spacing: 1px;
      font-weight: 600;
      margin-bottom: 0;
    }
    .copyright, .developer {
      color: white;
      font-size: .6rem;
      margin-top: 10px;
    }
    .divider {
      margin-right: 10px;
      margin-left: 10px;
    }
  }

// ----------------------------------------- //
// -------- MEDIA SCREEN ------------------- //
// ----------------------------------------- //

    @media (max-width: 700px) {
      .footer {
        padding: .25rem;

        .logo {
          height: 1.5rem;
          width: 4rem;
          }

        .address, .phone {
          font-size: .5rem;
          letter-spacing: 0;
          margin-bottom: 0;
        }
        .copyright, .developer {
          color: #fff;
          font-size: 7px;
          padding: 5px;
        }
        .divider {
          margin-right: 4px;
          margin-left: 4px;
          font-size: 9px;
        }
      }
    }
// ----------------------------------------- //
//  ----- END MEDIA SCREEN ---------------- //
// ----------------------------------------- //

`;

const d = new Date();
const getYear = d.getFullYear();

const Footer = (props) => (
    <Styles>
      <Navbar className="footer" id="footer">
        <Row>
          <Col xs={12} md={12}>
            {/* <img
              className="logo"
              src={logo}
              width="170"
              height="45"
              alt="Icy Blue logo"
            />
            <br /> */}
            <span className="address">3141 E Broad Street</span>
            <span className="divider"> | </span>
            <span className="address">Suite. 205</span>
            <span className="divider"> | </span>
            <span className="address">Mansfield, TX 76063</span>
            <span className="divider"> | </span>
            <span className="phone">Call us: 817-888-8888</span>
            <br />
            <span className="copyright">© Copyright {getYear} Icy Blue</span>
            <span className="divider"> | </span>
            <span className="developer">Designed & Maintain by <a href=' https://portfolio-dewi.herokuapp.com/' target='_blank'>Dewi Nurdin</a></span>
          </Col>
        </Row>
      </Navbar>
    </Styles>
)

export default Footer;

