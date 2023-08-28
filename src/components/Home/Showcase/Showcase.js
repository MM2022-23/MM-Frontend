import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import LogInPopUP from "../../NavBar/LogInPopUp/LogInPopUp";
import SignUpPopUp from "../../NavBar/SignUpPopUp/SignUpPopUp";
import background from "../../../Resources/Background/newBackground.png";
import "./Showcase.css";
import userSession from "../../../Service/Data/userSession";
const Showcase = ({ loggedIn, setLogIn, type,setType}) => {
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
            <div className="bigTexts">
              {/* Text 1 */}
              <div className="text-primary">
                <strong>Flavor Quests</strong>
              </div>

             

              <div className="text-primary">
                <strong>Diverse</strong>
              </div>

              {/* Text 3 */}
              <div className="text-primary">
                <strong>Tasty Bites</strong>
              </div>
            </div>

            {/* Text 4,5,6 */}
            <div className="smallTexts">
              <br></br>
              <span className="lead text-primary" style={{ fontSize: "1.7em" }}>
                <span className="text-primary">Freshly Cooked</span>
                <br></br>
                <span style={{ color: "rgb(255,87,20)" }}>Authentic Taste</span>
                <br></br>
              </span>
            </div>

           
       
              <Row className="my-2">
                <Col>

                  <div class="container">
                    <Link to="/order">
                      <button class="btn btn-primary btn-lg btn-block">
                        Meals/Tiffins
                      </button>
                    </Link>
                  </div>
                </Col>
                <Col>
                  
                  <div class="container">
                    <Link to="/order">
                      <button onClick={setType("caters")}class="btn btn-primary btn-lg btn-block">
                        Caters
                      </button>
                    </Link>
                  </div>
                </Col>
              </Row>
     
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
