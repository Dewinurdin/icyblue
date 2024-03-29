import React from 'react'
import { Container } from 'react-bootstrap';

import { IceMenu }  from './IceMenu'
import { PokeMenu } from './PokeMenu'
import Map from '../Components/Map'

import styled from 'styled-components'

const Styles = styled.div `
  .main .menu-item {
    height: auto;
    font-family: Raleway;
    padding-top: 1rem;
    text-align: center;
    background-color: #fff;
    margin-bottom: 0.1rem;

    .accordion {
    }

    h4 {
      font-weight: 600;
      padding-bottom: 0;
      margin-bottom: 0.1rem;
      margin-top: .75rem;
    }
    h5 {
      font-weight: bold;
      letter-spacing: .5px;
      color: #494747;
      font-size: 1.1rem;
    }
    h6 {
      font-weight: 600;
      letter-spacing: 1px;
      color: #494747;
      line-height: 1.5rem;
    }  
    .signature-menu {
      font-weight: 600;
      color: #fff;
      margin: .5rem;
    }   
    .card-header {
      background-color: rgb(159, 198, 243);
      color: #fff;
      border-radius: 3px;
    }
    .card-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: .25rem;
      padding-top: .5rem;
    }
    .ice-price {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 600;
      padding-bottom: .5rem;
    }   
  }
    .menu-item-title  {
      padding-bottom: .25px;
    }

    .menu-item-title, .menu-item-toppings {
      font-weight: 600;
      color: rgb(96,96,96);
      font-size: .9rem;
    }
    .menu-item-descriptions, .menu-item-list, .menu-item-price {
      font-weight: 500;
      color: rgb(128,128,128);
      font-size: .88rem;
      padding-bottom: .4rem;
    }
    .top-row {
      margin-top: 1rem;
    }
    .menu-item-descriptions {
    }

    .size {
      font-weight: 600;
      color: rgb(96,96,96);
      font-size: 1rem;
      letter-spacing: 1px;
      margin-top: -.25rem;
    }
    .col-md-4 {
      padding: 0;
    }
    .menu-item-warning {
      font-weight: 600;
      color: rgb(128,128,128);
      font-size: .85rem;
      padding: .5rem;
    }
  


  // ----------------------------------------- //
// -------- MEDIA SCREEN ------------------- //
// ----------------------------------------- //

    @media (max-width: 700px) {
      .main .menu-item {
        padding: 5px;

        .section-title {
          padding: 0;
          margin:0;
          border-radius: 0;
        }
        .ice-price {
          font-size: .9rem;
        }
        .card-body {
          padding: .5rem;
        }
        .card-title {
          font-size: 1rem;
        }

        h4 {
          font-size: .9rem;
        }
        h5 {
          font-size: .73rem;
          margin: 5px;
        }
        .top-row {
          padding: 0rem;
          margin-top: .75rem;
        }      
        .menu-item-title {
          font-size: .75rem;
          margin-bottom: .25rem;
          margin-top: .1rem;
          padding-bottom: 0;
        }
        .menu-item-descriptions {
          font-size: .67rem;
        }
        .menu-item-list {
          font-size: .7rem;
          margin: 5px;
        }
        .menu-item-warning {
          font-size: .6rem;
        }
      }
    }
// ----------------------------------------- //
//  ----- END MEDIA SCREEN ---------------- //
// ----------------------------------------- //


`;

export const Content = () => (
  <Styles>
    <Container className="main" id="content">
    {/* ICE CREAM ROLL MENU */}
      <IceMenu />

      {/* POKE MENU */}
      <PokeMenu />

      <Map />

    </Container>
  </Styles>

)