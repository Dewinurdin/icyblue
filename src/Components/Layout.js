import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div `
  .container {
    background-color: white;
  }


`
export const Layout = (props) => (
  <Styles>
    <Container className="layout">
      {props.children}
    </Container>
  </Styles>
)
