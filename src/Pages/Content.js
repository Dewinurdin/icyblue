import React from 'react'
import { Container } from 'react-bootstrap';

import { IceMenu }  from './IceMenu'
import { PokeMenu } from './PokeMenu'

import styled from 'styled-components'

const Styles = styled.div `
  .main .menu-item {
    height: auto;
    font-family: Raleway
    padding: 1rem;

    h4 {
      text-align: center;
      font-weight: 600;
      padding: .5rem;
    }
    h5 {
      text-align: center;
      font-weight: bold;
      letter-spacing: 1px;
      padding: .35rem;
      color: #494747;
      font-size: 1.1rem;
    }
    h6 {
      text-align: center;
      font-weight: 600;
      letter-spacing: 1px;
      color: #494747;
      line-height: 1.5rem;
    }    
  }

  .menu-item-title  {
      text-align: center;
  }

  .menu-item-title, .menu-item-toppings {
    font-weight: 600;
    color: rgb(96,96,96);
    font-size: 1rem;
  }
  .menu-item-descriptions, .menu-item-list {
    text-align: center;
    font-weight: 500;
    color: rgb(128,128,128);
    font-size: .88rem;
    margin-top: -10px;
  }
  .top-row {
    margin-top: .75rem;
  }

  .size {
    text-align: center;
    font-weight: 600;
    color: rgb(96,96,96);
    font-size: 1rem;
    letter-spacing: 1px;
    margin-top: -.25rem;
  }


`;

export const Content = () => (
  <Styles>
    <Container className="main" id="content">
    {/* ICE CREAM ROLL MENU */}
      <IceMenu />

      {/* POKE MENU */}
      <PokeMenu />

    </Container>
  </Styles>

)