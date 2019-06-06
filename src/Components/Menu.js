import React from 'react'
import { Container } from 'react-bootstrap';

export const Menu = (props) => (
      <Container className="menu-item" id="icecreamrolls">
        <h4>{props.menuTitle}</h4>
        {props.children}

      </Container>
)