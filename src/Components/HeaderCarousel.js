import React from 'react'
import { Carousel } from 'react-bootstrap';
import green  from '../assets/green.jpg'
import chocRolledIce  from '../assets/choc-rolled-ice.jpeg'
import caramel  from '../assets/caramel.jpeg'

import styled from 'styled-components'

const Styles = styled.div `
  .d-block {
    height: auto;
  }
`;


class HeaderCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Styles>
        <Carousel
          id="top-carousel"
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={caramel}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Whole Latte Love</h3>
              <p>Coffee Base, Biscoff Cookie & Caramel Sauce</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={chocRolledIce}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Mint to Be</h3>
              <p>Mint Oreo & Chocolate Sauce</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={green}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Green Giant</h3>
              <p>
                Green Tea Base, Lychee & Condensed Milk
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Styles>
    );
  }
}

export default HeaderCarousel;