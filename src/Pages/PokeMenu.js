import React from 'react'
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';

export const PokeMenu = () => (
  <Container className="menu-item" id="poke">
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle className="section-title" as={Card.Header} eventKey="0">
        <h4>POKE BOWL</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h5>REGULAR: Select 2 protein option   (24oz)    $10.95</h5>
            <h5>LARGE: Select 3 protein option     (32oz)    $13.50</h5>
              {/* 1st row */}
              <Row className="top-row">
              {/* 1st column */}
                <Col xs={12} md={4}>
                  <p className="menu-item-title">BASE (choose up to 2)</p>
                  <Col xs={12} md={12}>
                    <p className="menu-item-descriptions">Sushi Rice</p>
                    <p className="menu-item-descriptions">Brown Rice</p>
                    <p className="menu-item-descriptions">Organic Purple Rice</p>
                    <p className="menu-item-descriptions">Organic Kale</p>
                    <p className="menu-item-descriptions">Organic Spring Mix</p>
                  </Col>
                  </Col>

                  {/* 2nd column */}

                  <Col xs={12} md={4}>
                    <p className="menu-item-title">PROTEIN</p>
                    <Row>
                    <Col xs={2} md={12}></Col>
                    <Col xs={4} md={12}>
                      <p className="menu-item-descriptions">Ahi Tuna</p>
                      <p className="menu-item-descriptions">Scottish Salmon</p>
                      <p className="menu-item-descriptions">Yellow Tail</p>
                      <p className="menu-item-descriptions">Red Snapper</p>
                      <p className="menu-item-descriptions">Pepper Tuna</p>
                    </Col>
                    <Col xs={4} md={12}>
                      <p className="menu-item-descriptions">Spicy Tuna</p>
                      <p className="menu-item-descriptions">Creamy Scallops</p>
                      <p className="menu-item-descriptions">Shrimp</p>
                      <p className="menu-item-descriptions">Crabmeat</p>
                      <p className="menu-item-descriptions">Organic Tofu</p>
                    </Col>
                    <Col xs={2} md={12}></Col>
                    </Row>
                  </Col>

              {/* 3rd column */}
                <Col xs={12} md={4}>
                  <p className="menu-item-title">MIX-INS</p>
                  <Row>
                  <Col xs={2} md={12}></Col>
                  <Col xs={4} md={12}>
                    <p className="menu-item-descriptions">Green Onion</p>
                    <p className="menu-item-descriptions">Cilantro</p>
                    <p className="menu-item-descriptions">Sweet Onions</p>
                    <p className="menu-item-descriptions">Pineapple</p>
                  </Col>
                  <Col xs={4} md={12}>
                    <p className="menu-item-descriptions">Cucumber</p>
                    <p className="menu-item-descriptions">Mango</p>
                    <p className="menu-item-descriptions">Hijiki Seaweed</p>
                  </Col>
                  <Col xs={2} md={12}></Col>
                  </Row>
                </Col>
              </Row>

              {/* 2nd row */}
              <Row className="top-row">
                  {/* 1st column */}

                  <Col xs={12} md={4}>
                  <Row>
                    <Col xs={6} md={12}>
                      <p className="menu-item-title">FREE ADD ONS</p>
                      <p className="menu-item-descriptions">Cucumber Slices</p>
                      <p className="menu-item-descriptions">Edamame</p>
                      <p className="menu-item-descriptions">Sweet Corn</p>
                      <p className="menu-item-descriptions">Seaweed Salad</p>
                    </Col>
                    <Col xs={6} md={12}>
                      <p className="menu-item-title">PREMIUM ADD ONS (+ $1)</p>
                      <p className="menu-item-descriptions">Crabmeat</p>
                      <p className="menu-item-descriptions">Black Tobiko</p>
                      <p className="menu-item-descriptions">Avocado</p>
                      <p className="menu-item-descriptions">Red Tobiko</p>
                    </Col>
                    </Row>
                  </Col>

                {/* 2nd column */}
                  <Col xs={12} md={4}>
                  <p className="menu-item-title">DRESSING</p>
                  <Col xs={12} md={12}>
                    <p className="menu-item-descriptions"><strong>Shoyu</strong>: Sesame soy sauce with ginger</p>
                    <p className="menu-item-descriptions"><strong>Ponzu</strong>: Citrus soy sauce</p>
                    <p className="menu-item-descriptions"><strong>Spicy Ponzu</strong>: Ponzu sauce with jalapeno & garlic</p>
                    <p className="menu-item-descriptions"><strong>Wasabi Aioli</strong>: Sweet creamy wasabi sauce</p>
                    <p className="menu-item-descriptions"><strong>Sweet Chili Gochu</strong>: Sweet chili</p>
                    <p className="menu-item-descriptions"> <strong> Sriracha Aioli</strong>: Spicy mayo</p>
                    <p className="menu-item-descriptions"><strong>Wasabi Yuzu</strong>: Soy sauce citrus with wasabi</p>
                    <p className="menu-item-descriptions"><strong>Mango Sauce</strong>: Sweet creamy mango puree</p>
                    <p className="menu-item-descriptions"><strong>Eel Sauce</strong>: Thick soy sauce</p>
                  </Col>
                </Col>

                {/* 3rd column */}
                <Col xs={12} md={4}>
                  <p className="menu-item-title">TOPPINGS</p>
                  <Row>
                    <Col xs={2} md={12}></Col>
                    <Col xs={4} md={12}>
                      <p className="menu-item-descriptions">Tempura Flakes</p>
                      <p className="menu-item-descriptions">Crispy Onion</p>
                      <p className="menu-item-descriptions">Jalapeno</p>
                      <p className="menu-item-descriptions">Wakame Seaweed</p>
                    </Col>
                    <Col xs={4} md={12}>
                      <p className="menu-item-descriptions">Masago (Fish egg)</p>
                      <p className="menu-item-descriptions">Kizami Nori</p>
                      <p className="menu-item-descriptions">Taro Chip</p>
                    </Col>
                    <Col xs={2} md={12}></Col>
                  </Row>
                </Col>
            </Row>

          {/* 3rd row */}
            <Row>
              {/* 1st column */}
              <Col xs={12} md={12}>
                <p className="menu-item-title"><strong>SELF SERVED TOPPINGS ON SERVER STATION: </strong></p>
                <Row>
                  <Col xs={2} md={4}></Col>
                    <Col xs={4} md={2}>
                      <p className="menu-item-descriptions">Black Sesame</p>
                      <p className="menu-item-descriptions">Furikake</p>
                      <p className="menu-item-descriptions">Chili Flakes</p>
                    </Col>
                    <Col xs={4} md={2}>
                      <p className="menu-item-descriptions">Sweet Ginger</p>
                      <p className="menu-item-descriptions">Shichimi</p>
                      <p className="menu-item-descriptions">Wasabi</p>
                    </Col>
                    <Col xs={2} md={4}></Col>
                </Row>
                </Col>
              </Row>
              
              <Row>
                <Col xs={12} md={12}>
                  <p className=" section-title signature-menu">SIGNATURE BOWLS</p>
                </Col>

                <Col xs={12} md={12}>
                <p className="menu-item-title">Classic Tuna</p>
                <p className="menu-item-descriptions">Ahi Tuna, green& sweet onions, cucumber, sesame seed, avocado, edamame, classic shoyu sauce and sushi rice</p>
                <p className="menu-item-price"><strong>$11.50</strong></p>

                <p className="menu-item-title">Spicy Yuzu Salmon</p>
                <p className="menu-item-descriptions">Scottish salmon, green onions, cilantro, cucumber, mango, yuzu kosho sauce, kale salad & brown rice, avocado,  jalapeno and sweet ginger</p>
                <p className="menu-item-price"><strong>$12</strong></p>

                <p className="menu-item-title">Icy Blue</p>
                <p className="menu-item-descriptions">Ahi tuna, pepper tuna, green & sweet onion, cucumber, edamame, sriracha aioli sauce, sushi rice, avocado and seaweed salad</p>
                <p className="menu-item-price"><strong>$13.95</strong></p>

                <p className="menu-item-title">Veggie Bowl</p>
                <p className="menu-item-descriptions">Sushi rice and organic  local  greens, organic  tofu,  edamame, cucumber, sweet  corn, sweet chili, gochu  sauce, avocado, seaweed salad</p>
                <p className="menu-item-price"><strong>$10.95</strong></p>

                <p className="menu-item-title">Ahi Tuna Tower</p>
                <p className="menu-item-descriptions">Sushi rice, spicy tuna, crabmeat, avocado, red tobiko, black tobiko, masago, kizami nori, mango sauce,  eel  sauce, sweet  chili sauce &  spicy mayo</p>
                <p className="menu-item-price"><strong>$13.50</strong></p>

                <p className="menu-item-title">Hawaiian Barbecue Bowl</p>
                <p className="menu-item-descriptions">??Rice?? Sweet corn, onion, broccoli, carrot with Hawaiian barbecue sauce</p>
              
              <Row>
                <Col xs={12} md={12}></Col>
                  <Col xs={3} md={3}>
                    <p className="menu-item-descriptions">with Chicken</p>
                  </Col> 
                  <Col xs={3} md={3}>
                    <p className="menu-item-price"><strong>$9</strong></p>
                  </Col> 
                  <Col xs={3} md={3}>            
                    <p className="menu-item-descriptions">with Shrimp</p>
                  </Col>
                  <Col xs={3} md={3}>
                  <p className="menu-item-price"><strong>$10</strong></p>
                  </Col>

                  <Col xs={3} md={3}>
                    <p className="menu-item-descriptions">with Steak</p>
                  </Col> 
                  <Col xs={3} md={3}>
                    <p className="menu-item-price"><strong>$12</strong></p>
                  </Col> 
                  <Col xs={3} md={3}>
                    <p className="menu-item-descriptions">with Salmon</p>
                  </Col> 
                  <Col xs={3} md={3}>
                    <p className="menu-item-price"><strong>$11</strong></p>
                  </Col> 
                  <Col xs={3} md={3}></Col>
                </Row>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={12}>
                  <p className="menu-item-title">
                    Consuming raw or under cooked meat, fish, shellfish or fresh egg may increase your risk of food  borne illness, especially if you have certain medical conditions
                  </p>
                </Col>
              </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  </Container>
)