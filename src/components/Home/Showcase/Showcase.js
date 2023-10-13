import { useState } from "react";
import { Form, Dropdown } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import LogInPopUP from "../../NavBar/LogInPopUp/LogInPopUp";
import SignUpPopUp from "../../NavBar/SignUpPopUp/SignUpPopUp";
import background from "../../../Resources/Background/demoBackground.png";
import "./Showcase.css";
import ZipCode from "../../OrderPage/ZipCode/ZipCode";
import Container from "react-bootstrap/Container";
// import Row from
const Showcase = ({
  loggedIn,
  setLogIn,
  type,
  setType,
  zipCode,
  setZipCode,
}) => {
  const [pickUpOrDeliv, setPickUpOrDeliv] = useState("Delivery/Pickup");
  return (
    <section
      className="bg-primary text-primary p-5 p-lg-0 pt-lg-5 text-center text-sm-start backgroundImage"
      id="Showcase"
      style={{
        // Background Image
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="container">
        <div className="d-sm-flex align-items-center my-0.1">
          {/* Red Box */}
          <div className="boxing">
            {/* Big Texts */}
            {/* <div className="bigTexts">
              <div className="text-primary">
                <strong>Find local chefs near you</strong>
              </div> */}
            {/* Text 1 */}

            {/* Text 3 */}
            {/* <div className="text-primary">
                <strong>Tasty Bites</strong>
              </div> */}
            {/* </div> */}

            {/* Text 4,5,6 */}
            {/* <div className="smallTexts">
              <br></br>
              <span className="lead text-primary" style={{ fontSize: "1.7em" }}>
                <span className="text-primary">Freshly Cooked</span>
                <br></br>
                <span style={{ color: "rgb(255,87,20)" }}>Authentic Taste</span>
                <br></br>
              </span>
            </div> */}
            {/* <Container className="mt-4">
             

              Zip Code Element
              <Row>
                <ZipCode zipCode={zipCode} setZipCode={setZipCode} />
              </Row>

              <Row>
                <Col>
                  <Link to="/chefs">
                    <button className="btn btn-primary btn-lg btn-block">
                      Search
                    </button>
                  </Link>
                </Col>
              </Row> */}

            {/* <div className="container justify-content-center text-center">
                <Link to="/chefs">
                  <button className="btn btn-dark btn-lg btn-block">
                    Continue
                  </button>
                </Link>
              </div> */}
            {/* </Container> */}

            <div className="text-dark">
              <h4>Find local chefs near you</h4>
            </div>

            <Container fluid>
              <Row className="justify-content-center mt-2">
                <Col md={6} sm={12}>
                  <Form>
                    <Row className="align-items-center">
                      <Col xs={12} sm={8}>
                        <Form.Group controlId="zipcode" className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Enter Zipcode"
                            className="text-center"
                          />
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={4}>
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {pickUpOrDeliv}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item
                              onClick={() => setPickUpOrDeliv("Delivery")}
                            >
                              Delivery
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={() => setPickUpOrDeliv("Pick Up")}
                            >
                              Pickup
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                      <Col xs={12} className="mt-3 mt-sm-0">
                        <Link to="/chefs">
                          {" "}
                          <Button
                            variant="dark"
                            type="submit"
                            className="w-100"
                          >
                            Search
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
