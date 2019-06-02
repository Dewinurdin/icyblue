import React from 'react'
import { IceMenu }  from './IceMenu'
import { PokeMenu } from './PokeMenu'
import styled from 'styled-components'

const Styles = styled.div `
  .main {
    height: 40rem;
    font-family: Raleway
  
    h3 {
      text-align: center;
    }
    
  }

`;

export const Home = () => (
  <Styles>
    <div className="main" id="home">
      <h2>Home</h2>
        <p>Click on the link to see the "smooth" scrolling effect.</p>
          <a href="#icecreamrolls">Click Me to Smooth Scroll to Section 2 Below</a>
        <p>Note: Remove the scroll-behavior property to remove smooth scrolling.</p>
      <IceMenu />
      <PokeMenu/>
    </div>
  </Styles>

)