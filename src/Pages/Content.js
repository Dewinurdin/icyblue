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

    .section-title {
      background-color: rgb(159, 198, 243);
      color: #fff;
      margin: 0 0 .75rem 0;
      padding: .75rem;
      border-radius: 3px;
    }

    h4 {
      font-weight: 600;
      padding: .5rem;
      letter-spacing: 2px;
    }
    h5 {
      font-weight: bold;
      letter-spacing: 1px;
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
      justify-content: center;
      font-weight: 600;
      color: #fff;
      margin: .5rem;
    }    
  }

    .menu-item-title  {
        text-align: center;
        margin-bottom: 0px;
    }

    .menu-item-title, .menu-item-toppings {
      font-weight: 600;
      color: rgb(96,96,96);
      font-size: 1rem;
    }
    .menu-item-descriptions, .menu-item-list, .menu-item-price {
      text-align: center;
      font-weight: 500;
      color: rgb(128,128,128);
      font-size: .88rem;
    }
    .top-row {
      margin: 1rem;
    }

    .size {
      text-align: center;
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
      text-align: center;
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
          
        }

        h4 {
          font-size: 1rem;
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
          margin-top: .25rem;
        }
        .menu-item-descriptions {
          font-size: .67rem;
          margin-bottom: 0;
        }
        .menu-item-list {
          font-size: .7rem;
          margin: 5px;
          padding: 0px;
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