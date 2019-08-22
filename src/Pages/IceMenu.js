import React from 'react'
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';

export const IceMenu = () => (
    <Container className="menu-item" id="icecreamrolls">
        <Accordion defaultActiveKey="0" >
          <Card >
            <Accordion.Toggle className="section-title" as={Card.Header} eventKey="0">
              <div className="card-title">ROLLED ICE CREAM</div>
              <div className="ice-price">$6.99</div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>STEP 1:</h4>
                <h5> CHOOSE A FLAVOR LISTED BELOW</h5>
                <h4>STEP 2: </h4>
                <h5>CHOOSE 3 TASTY TOPPINGS AFTER YOUR ICE CREAM IS MADE</h5>
                <Row className="top-row">
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Strawbella</div>
                    <div className="menu-item-descriptions"> Strawberry Base, Graham Cracker & Nutella</div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Monkey Business</div>
                    <div className="menu-item-descriptions"> Banana Base Graham Cracker, Nutella & Chocolate Sauce</div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Pink Lady</div>
                    <div className="menu-item-descriptions">Strawberry Base, Graham Crackers & Condensed Milk</div>
                  </Col>
                </Row>

                <Row >
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Green Giant</div>
                    <div className="menu-item-descriptions">Green Tea Base, Lychee & Condensed Milk</div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Mucho Mango</div>
                    <div className="menu-item-descriptions">Strawberry Base, Mango & Condensed Milk</div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Whole Latte Love</div>
                    <div className="menu-item-descriptions">Coffee Base, Biscoff Cookie & Caramel Sauce</div>
                  </Col>
                </Row>

                <Row >
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Cookie Monster</div>
                    <div className="menu-item-descriptions">Oreo Cookie & Chocolate Sauce</div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Mint To Be</div>
                    <div className="menu-item-descriptions">Mint Oreo & Chocolate Sauce</div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Jungle Love</div>
                    <div className="menu-item-descriptions">Chocolate Base, Strawberry, Banana & Chocolate Sauce</div>
                  </Col>
                </Row>
                
                <Row >
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Cookie Dough</div>
                    <div className="menu-item-descriptions">Cookie Dough & Caramel Sauce</div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Shockers Brownie</div>
                    <div className="menu-item-descriptions">Chocolate Milk Base, Brownie & Chocolate Sauce</div>
                  </Col>
                  <Col xs={12} md={4}>
                    <div className="menu-item-title">Wildcats</div>
                    <div className="menu-item-descriptions">Blackberry, Strawberry, Banana & Chocolate Sauce</div>
                  </Col>
                </Row>

                <Row className="top-row">
                  <Col xs={12} md={12}>
                    <h5 style={{ marginBottom: '1rem' }}>TOPPINGS:</h5>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="menu-item-title">FRUITS</div>
                    <div className="menu-item-list">Cherry</div>
                    <div className="menu-item-list">Blueberry</div>
                    <div className="menu-item-list">Strawberry</div>
                    <div className="menu-item-list">Mango</div>
                    <div className="menu-item-list">Banana</div>
                    <div className="menu-item-list">Lychee</div>
                    <div className="menu-item-list">Pineapple</div>
                    <div className="menu-item-list">Fruit Bubble</div>
                  </Col>
                  <Col xs={6} md={3}>
                    <div className="menu-item-title">CANDIES</div>
                      <div className="menu-item-list">Marshmallow</div>
                      <div className="menu-item-list">Gummy Bear</div>
                      <div className="menu-item-list">Sprinkles</div>
                      <div className="menu-item-list">Skittles</div>
                      <div className="menu-item-list">Coconut Roll</div>
                      <div className="menu-item-list">Sour Patch Kids </div>
                      <div className="menu-item-list">Condensed Milk </div>

                  </Col>

                  <Col xs={6} md={3}>
                    <div className="menu-item-title">CHOCOLATE GOODIES</div>
                      <div className="menu-item-list">Brownies</div>
                      <div className="menu-item-list">Crushed Reeses</div>
                      <div className="menu-item-list">Crushed Butterfingers </div>
                      <div className="menu-item-list">Chocolate Pocky Stick</div>
                      <div className="menu-item-list">Oreo</div>
                      <div className="menu-item-list">Mint Oreo</div>
                      <div className="menu-item-list">Kit Kat</div>
                      <div className="menu-item-list">Chocolate Chips</div>
                      <div className="menu-item-list">M&M's</div>
                      <div className="menu-item-list">Cookie Dough </div>
                      <div className="menu-item-list">Crushed Peanuts</div>
                      <div className="menu-item-list">Pecans</div>
                  </Col>

                  <Col xs={6} md={3}>
                    <Col  xs={12} md={12}>
                      <div className="menu-item-title">CEREALS</div>
                      <div className="menu-item-list">Cinnamon Toast Crunch</div>
                      <div className="menu-item-list">Fruity Pebbles</div>
                    </Col>
                    <Col xs={12} md={12}>
                      <div className="menu-item-title">SYRUPS</div>
                        <div className="menu-item-list">Whipped Cream</div>
                        <div className="menu-item-list">Caramel Sauce</div>
                        <div className="menu-item-list">Chocolate Sauce</div>
                        <div className="menu-item-list">Strawberry Sauce</div>
                    </Col>
                    <Col xs={12} md={12}>
                    <div className="menu-item-title">COOKIES</div>
                      <div className="menu-item-list">Graham Crackers</div>
                      <div className="menu-item-list">Pretzel Stix</div>
                      <div className="menu-item-list">Wafer Rolls</div>
                      <div className="menu-item-list">Nilla Wafers</div>
                    </Col>
                  </Col>
                </Row>
                <Row>
                <Col xs={12} md={12}>
                  <div className="menu-item-title">ADDITIONAL ADD-ONS +$0.50</div>
                </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
)