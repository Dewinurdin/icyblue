import React from 'react'
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';

export const IceMenu = () => (
    <Container className="menu-item" id="icecreamrolls">
        <Accordion defaultActiveKey="0" >
          <Card >
            <Accordion.Toggle className="section-title" as={Card.Header} eventKey="0">
              <h4>ROLLED ICE CREAM</h4>
              <p className="ice-price">$6.99</p>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h5>STEP 1: Choose a Flavor listed below</h5>
                <h5>STEP 2: Choose 3 tasty toppings after your ice cream is made</h5>
                <Row className="top-row">
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Strawbella</p>
                    <p className="menu-item-descriptions"> Strawberry, Graham Cracker & Nutella</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Monkey Business</p>
                    <p className="menu-item-descriptions"> Banana, Graham Cracker, Nutella & Chocolate Sauce</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Pink Lady</p>
                    <p className="menu-item-descriptions">Strawberry, Graham Crackers & Condensed Milk</p>
                  </Col>
                </Row>

                <Row >
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Green Giant</p>
                    <p className="menu-item-descriptions">Green Tea Base, Lychee & Condensed Milk</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Mucho Mango</p>
                    <p className="menu-item-descriptions">Strawberry, Mango & Condensed Milk</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Whole Latte Love</p>
                    <p className="menu-item-descriptions">Coffee Base, Biscoff Cookie & Caramel Sauce</p>
                  </Col>
                </Row>

                <Row >
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Cookie Monster</p>
                    <p className="menu-item-descriptions">Oreo Cookie & Chocolate Sauce</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Mint To Be</p>
                    <p className="menu-item-descriptions">Mint Oreo & Chocolate Sauce</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Jungle Love</p>
                    <p className="menu-item-descriptions">Chocolate Base, Strawberry, Banana & Chocolate Sauce</p>
                  </Col>
                </Row>
                
                <Row >
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Cookie Dough</p>
                    <p className="menu-item-descriptions">Cookie Dough & Caramel Sauce</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Shockers Brownie</p>
                    <p className="menu-item-descriptions">Chocolate Milk Base, Brownie & Chocolate Sauce</p>
                  </Col>
                  <Col xs={12} md={4}>
                    <p className="menu-item-title">Wildcats</p>
                    <p className="menu-item-descriptions">Blackberry, Strawberry, Banana & Chocolate Sauce</p>
                  </Col>
                </Row>

                <Row className="top-row">
                  <Col xs={12} md={12}>
                    <h5 style={{ marginBottom: '1rem' }}>TOPPINGS:</h5>
                  </Col>
                  <Col xs={6} md={3}>
                    <p className="menu-item-title">FRUITS</p>
                    <p className="menu-item-list">Cherry</p>
                    <p className="menu-item-list">Blueberry</p>
                    <p className="menu-item-list">Strawberry</p>
                    <p className="menu-item-list">Mango</p>
                    <p className="menu-item-list">Banana</p>
                    <p className="menu-item-list">Lychee</p>
                    <p className="menu-item-list">Pineapple</p>
                    <p className="menu-item-list">Fruit Bubble</p>
                  </Col>
                  <Col xs={6} md={3}>
                    <p className="menu-item-title">CANDIES</p>
                      <p className="menu-item-list">Marshmallow</p>
                      <p className="menu-item-list">Gummy Bear</p>
                      <p className="menu-item-list">Sprinkles</p>
                      <p className="menu-item-list">Skittles</p>
                      <p className="menu-item-list">Coconut Flakes</p>
                      <p className="menu-item-list">Sour Patch Kids </p>
                      <p className="menu-item-list">Condensed Milk </p>

                  </Col>

                  <Col xs={6} md={3}>
                    <p className="menu-item-title">CHOCOLATE GOODIES</p>
                      <p className="menu-item-list">Brownies</p>
                      <p className="menu-item-list">Crushed Reeses</p>
                      <p className="menu-item-list">Crushed Butterfingers </p>
                      <p className="menu-item-list">Chocolate Pocky Stick</p>
                      <p className="menu-item-list">Oreo</p>
                      <p className="menu-item-list">Mint Oreo</p>
                      <p className="menu-item-list">Kit Kat</p>
                      <p className="menu-item-list">Chocolate Chips</p>
                      <p className="menu-item-list">M&M's</p>
                      <p className="menu-item-list">Cookie Dough </p>
                      <p className="menu-item-list">Crushed Peanuts</p>
                      <p className="menu-item-list">Pecans</p>
                  </Col>

                  <Col xs={6} md={3}>
                    <Col  xs={12} md={12}>
                        <p className="menu-item-title">CEREALS</p>
                      <p className="menu-item-list">Cinnamon Toast Crunch</p>
                        <p className="menu-item-list">Fruity Pebbles</p>
                    </Col>
                    <Col xs={12} md={12}>
                      <p className="menu-item-title">SYRUPS</p>
                        <p className="menu-item-list">Whipped Cream</p>
                        <p className="menu-item-list">Caramel Sauce</p>
                        <p className="menu-item-list">Chocolate Sauce</p>
                        <p className="menu-item-list">Strawberry Sauce</p>
                    </Col>
                    <Col xs={12} md={12}>
                    <p className="menu-item-title">COOKIES</p>
                      <p className="menu-item-list">Graham Crackers</p>
                      <p className="menu-item-list">Pretzel Stix</p>
                      <p className="menu-item-list">Wafer Rolls</p>
                      <p className="menu-item-list">Nilla Wafers</p>
                    </Col>
                  </Col>
                </Row>
                <Row>
                <Col xs={12} md={12}>
                  <p className="menu-item-title">ADDITIONAL ADD-ONS +$0.50</p>
                </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
)