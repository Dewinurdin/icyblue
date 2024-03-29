import React from 'react'
import { Accordion, Card, Container, Row, Col } from 'react-bootstrap';

export const PokeMenu = () => (
  <Container className="menu-item" id="poke">
    <Accordion defaultActiveKey="0">
      <Card>
        <Accordion.Toggle className="section-title" as={Card.Header} eventKey="0">
        <div className="card-title">POKE BOWL</div>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <h4>REGULAR: $10.95</h4>
            <h5>SELECT 2 PROTEIN OPTION   (24oz)    </h5>
            <h4>LARGE: $13.50</h4>
            <h5>SELECT 3 PROTEIN OPTION   (32oz)    </h5>
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
                    <Col xs={1} md={12}></Col>
                    <Col xs={5} md={12}>
                      <p className="menu-item-descriptions">Ahi Tuna</p>
                      <p className="menu-item-descriptions">Scottish Salmon</p>
                      <p className="menu-item-descriptions">Pepper Tuna</p>
                      <p className="menu-item-descriptions">Crabmeat</p>

                    </Col>
                    <Col xs={5} md={12}>
                      <p className="menu-item-descriptions">Spicy Tuna</p>
                      <p className="menu-item-descriptions">Creamy Scallops</p>
                      <p className="menu-item-descriptions">Organic Tofu</p>
                      <p className="menu-item-descriptions">Popcorn Shrimp</p>
                    </Col>
                    <Col xs={1} md={12}></Col>
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
                      <p className="menu-item-title">FREE ADD ON</p>
                      <p className="menu-item-descriptions">Cucumber Slices</p>
                      <p className="menu-item-descriptions">Edamame</p>
                      <p className="menu-item-descriptions">Sweet Corn</p>
                      <p className="menu-item-descriptions">Seaweed Salad</p>
                    </Col>
                    <Col xs={6} md={12}>
                      <p className="menu-item-title">PREMIUM ADD ON (+$1)</p>
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
                      <p className="menu-item-descriptions">Crispy Lotus Root</p>

                    </Col>
                    <Col xs={2} md={12}></Col>
                  </Row>
                </Col>
            </Row>

          {/* 3rd row */}
            <Row>
              {/* 1st column */}
              <Col xs={12} md={12}>
                <div className="menu-item-title">SELF SERVED TOPPINGS ON SERVER STATION: </div>
                <Row>
                    <Col xs={6} md={6}>
                      <p className="menu-item-descriptions">Black Sesame</p>
                      <p className="menu-item-descriptions">Furikake</p>
                      <p className="menu-item-descriptions">Chili Flakes</p>
                    </Col>
                    <Col xs={6} md={6}>
                      <p className="menu-item-descriptions">Sweet Ginger</p>
                      <p className="menu-item-descriptions">Shichimi</p>
                      <p className="menu-item-descriptions">Wasabi</p>
                    </Col>
                </Row>

              </Col>
            </Row>
              
              <Row>
                <Col xs={12} md={12}>
                  <div className=" section-title signature-menu">SIGNATURE BOWLS</div>
                </Col>

                <Col xs={12} md={12}>
                <div className="menu-item-title">Classic Tuna</div>
                <div className="menu-item-descriptions">Ahi Tuna, green & sweet onions, cucumber, sesame seed, avocado, edamame, classic shoyu sauce & sushi rice</div>
                <div className="menu-item-price"><strong>$11.50</strong></div>

                <div className="menu-item-title">Spicy Yuzu Salmon</div>
                <div className="menu-item-descriptions">Scottish salmon, green onions, cilantro, cucumber, mango, yuzu kosho sauce, kale salad & brown rice, avocado,  jalapeno and sweet ginger</div>
                <div className="menu-item-price"><strong>$12</strong></div>

                <div className="menu-item-title">Icy Blue</div>
                <div className="menu-item-descriptions">Ahi tuna, pepper tuna, green & sweet onion, cucumber, edamame, sriracha aioli sauce, sushi rice, avocado and seaweed salad</div>
                <div className="menu-item-price"><strong>$13.95</strong></div>

                <div className="menu-item-title">Veggie Bowl</div>
                <div className="menu-item-descriptions">Sushi rice and organic  local  greens, organic  tofu,  edamame, cucumber, sweet  corn, sweet chili, gochu  sauce, avocado, seaweed salad</div>
                <div className="menu-item-price"><strong>$10.95</strong></div>

                <div className="menu-item-title">Ahi Tuna Tower</div>
                <div className="menu-item-descriptions">Sushi rice, spicy tuna, crabmeat, avocado, red tobiko, black tobiko, masago, kizami nori, mango sauce,  eel  sauce, sweet  chili sauce &  spicy mayo</div>
                <div className="menu-item-price"><strong>$13.50</strong></div>

                <div className="menu-item-title">Hawaiian Barbecue Bowl</div>
                <div className="menu-item-descriptions">Your choice of Steam Rice, Brown Rice, Purple Rice or</div>
                <div className="menu-item-descriptions"><strong>Upgrade to Fried Rice + $2</strong></div>

                <div className="menu-item-descriptions">with Steamed Asparagus, Sweet corn, Broccoli, Carrots drizzled with Hawaiian barbecue sauce</div>
              
              <Row>
                <Col xs={12} md={12}>                
                  <div className="menu-item-descriptions" style={{ padding: ".3rem" }}>
                    <strong>Pick your protein:</strong>
                  </div>
                </Col>
                  <Col xs={3} md={3}>
                    <div className="menu-item-descriptions">Chicken</div>
                  </Col> 
                  <Col xs={3} md={3}>
                    <div className="menu-item-price"><strong>$9</strong></div>
                  </Col> 
                  <Col xs={3} md={3}>            
                    <div className="menu-item-descriptions">Shrimp</div>
                  </Col>
                  <Col xs={3} md={3}>
                    <div className="menu-item-price"><strong>$10</strong></div>
                  </Col>

                  <Col xs={3} md={3}>
                    <div className="menu-item-descriptions">Steak</div>
                  </Col> 
                  <Col xs={3} md={3}>
                    <div className="menu-item-price"><strong>$12</strong></div>
                  </Col> 
                  <Col xs={3} md={3}>
                    <div className="menu-item-descriptions">Salmon</div>
                  </Col> 
                  <Col xs={3} md={3}>
                    <div className="menu-item-price"><strong>$11</strong></div>
                  </Col> 
                  <Col xs={3} md={3}></Col>
                </Row>

                <Row>
                <Col xs={12} md={12}>                
                  <div className="menu-item-descriptions" style={{ padding: ".3rem" }}>
                    <strong>Make it a Combo:</strong>
                  </div>
                </Col>
                  <Col xs={6} md={6}>
                    <div className="menu-item-descriptions">Combination of 2</div>
                  </Col> 
                  <Col xs={6} md={6}>
                    <div className="menu-item-price"><strong>$16</strong></div>
                  </Col> 
                  <Col xs={6} md={6}>            
                    <div className="menu-item-descriptions">Combination of 3</div>
                  </Col>
                  <Col xs={6} md={6}>
                  <div className="menu-item-price"><strong>$20</strong></div>
                  </Col>
                </Row>
                </Col>
              </Row>


              <Row>
                <Col xs={12} md={12}>
                  <div className="menu-item-warning">
                    Consuming raw or under cooked meat, fish, shellfish or fresh egg may increase your risk of food  borne illness, especially if you have certain medical conditions
                  </div>
                </Col>
              </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

  </Container>
)