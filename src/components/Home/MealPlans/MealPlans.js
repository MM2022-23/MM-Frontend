import DataCollection from "../../../Service/Data/DataCollection";
import userSession from "../../../Service/Data/userSession";
import DataCollectionAPIService from "../../../Service/APICalls/DataCollectionAPIService";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
const MealPlans = ({
  setMeals,
  setResetOrderPageInfo,
  setCart,
  setMealNumbers,
}) => {
  const navigate = useNavigate();

  const buttonClicked = (meals) => {
    DataCollection.registerActivity(
      "Home",
      `Clicked: ${
        userSession.isLoggedIn() && userSession.getUser().id !== "improper"
          ? `${meals} ${userSession.getUser().emailAddress}`
          : `${meals} Anon`
      }`
    );
    setMeals(meals);
    setResetOrderPageInfo(1); // want to pick freq, date, zipCode but number of meals is chosen
    setCart([]);
    setMealNumbers([]);
    navigate("/order");
  };

  return (
    <section
      className="mealPlans bg-dark"
      style={{ fontFamily: "Signika", padding: "64px 32px" }}
    >
      <div className="container text-center" style={{ marginLeft: "auto" }}>
        <div
          style={{
            marginRight: "auto",
            marginBottom: "33px",
            marginLeft: "auto",
          }}
        >
          {/* Main Title: Meal Plans For You */}
          <h1
            className="text-light"
            style={{ margin: "0px 0px 10px", fontSize: "48px" }}
          >
            Meal Plans for You
          </h1>

          {/* Main description */}
          <p className="text-primary">
            Order anywhere between 2 to 8+ meals per week, with prices as low as
            $11.99 per meal. No reoccurring subscriptions to tie you down.
          </p>
        </div>

        <Container className="text-primary">
          <Row style={{ marginTop: "66px", marginBottom: "32px" }}>
            <Col sm style={{ marginLeft: "8px", marginRight: "8px" }}>
              <div className="card-body text-center">
                {/* Image button 1  */}
                <button
                  onClick={() => buttonClicked("2 meals")}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img
                    className="h1 mb-3"
                    src={require("../../../Resources/Meals/meal1.png")}
                    alt="lorem"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "17px",
                      marginBottom: "6px",
                    }}
                  />
                </button>
                {/* Text below Img 1 */}
                <h4>2 meals</h4>
              </div>
            </Col>

            <Col sm style={{ marginLeft: "8px", marginRight: "8px" }}>
              <div className="card-body text-center">
                {/* Image button 2 */}
                <button
                  onClick={() => buttonClicked("4 meals")}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img
                    className="h1 mb-3"
                    src={require("../../../Resources/Meals/meal2.png")}
                    alt="lorem"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "17px",
                      marginBottom: "6px",
                    }}
                  />
                </button>
                {/* Text below Img 2 */}
                <h4>
                  4 meals
                  {/* <i>
                    <super>*</super>Save 5%<super>*</super>
                  </i> */}
                </h4>
              </div>
            </Col>

            <Col sm style={{ marginLeft: "8px", marginRight: "8px" }}>
              <div className="card-body text-center">
                {/* Image button 3 */}
                <button
                  onClick={() => buttonClicked("6 meals")}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img
                    className="h1 mb-3"
                    src={require("../../../Resources/Meals/meal3.png")}
                    alt="lorem"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "17px",
                      marginBottom: "6px",
                    }}
                  />
                </button>
                {/* Text below Img 3 */}
                <h4>
                  6 meals
                  {/* <i>
                    <super>*</super>Save 8%<super>*</super>
                  </i> */}
                </h4>
              </div>
            </Col>

            <Col sm style={{ marginLeft: "8px", marginRight: "8px" }}>
              <div className="card-body text-center">
                {/* Image button 4 */}
                <button
                  onClick={() => buttonClicked("8+ meals")}
                  style={{ background: "transparent", border: "none" }}
                >
                  <img
                    className="h1 mb-3"
                    src={require("../../../Resources/Meals/meal4.png")}
                    alt="lorem"
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "17px",
                      marginBottom: "6px",
                    }}
                  />
                </button>
                {/* Text below Img 4 */}
                <h4>
                  8+ meals
                  {/* <i>
                    <super>*</super>Save 10%<super>*</super>
                  </i> */}
                </h4>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="d-flex justify-content-center align-items-center">
                {/* Link to order page */}
                <Link to="/order">
                  <Button
                    variant="primary"
                    className="text-dark"
                    style={{
                      height: "50px",
                      width: "150px",
                      borderRadius: "25px",
                      fontSize: "25px",
                    }}
                    onClick={() => {
                      DataCollection.registerActivity(
                        "Home",
                        `Clicked Order frm Meal Plans: ${
                          userSession.isLoggedIn() &&
                          userSession.getUser().id !== "improper"
                            ? userSession.getUser().emailAddress
                            : "Anon"
                        }`
                      );
                    }}
                  >
                    Order
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default MealPlans;
