import React from 'react'
import { Container } from 'react-bootstrap';

export const Menu = (props) => (
      <Container className="menu-item" id="icecreamrolls">
        {props.children}

      </Container>
)