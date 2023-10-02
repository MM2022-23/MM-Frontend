import DataCollection from "../../../Service/Data/DataCollection";
import DataCollectionAPIService from "../../../Service/APICalls/DataCollectionAPIService";
import UpSaleItems from "../../../SharedComponents/UpSaleItems/UpSaleItems";
import SignUpPopUp from "../SignUpPopUp/SignUpPopUp";
import LogInPopUP from "../LogInPopUp/LogInPopUp";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import MealData from "../../../Service/Data/MealData";
import userSession from "../../../Service/Data/userSession";
import PopUp from "../../../SharedComponents/PopUp/PopUp";
import Payment from "../../../SharedComponents/PopUp/Payment/Payment";
import DataCollectionAPI from "../../../Service/APICalls/DataCollectionAPIService";
import zipCodeService from "../../../Service/Data/zipCodeService";
const ShoppingCart = ({
  cart,
  setCart,
  cartPrice,
  setCartPrice,
  mealNumbers,
  setMealNumbers,
  setLogIn,
  numMeals,
  numMealsSelected,
  setNumMealsSelected,
  delivDate,
  zipCode,
}) => {
  const [displayUpSale, setDisplayUpSale] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const navigate = useNavigate();

  const clearCart = () => {
    setCart([]);
    setNumMealsSelected(0);
    setCartPrice(0);
    const emptyAr = new Array(mealNumbers.length).fill(0);
    setMealNumbers(emptyAr);
  };
  const add = (id) => {
    // ONLY IF actual meal is selected addons not counted
    if (id < MealData.getNumberOfActualMeals()) {
      setNumMealsSelected((numMealsSelected) => numMealsSelected + 1);
    }

    setCartPrice(
      (cartPrice) =>
        Math.round(
          (cartPrice + MealData.getAllItems()[id].price + Number.EPSILON) * 100
        ) / 100
    );
    mealNumbers[id]++;

    const tempAr = [];

    mealNumbers.map((item) => {
      tempAr.push(item);
    });

    setMealNumbers(tempAr);
  };
  const remove = (id) => {
    if (mealNumbers[id] > 0) {
      // ONLY IF actual meal is selected addons not counted
      if (id < MealData.getNumberOfActualMeals()) {
        setNumMealsSelected((numMealsSelected) => numMealsSelected - 1);
      }

      setCartPrice(
        (cartPrice) =>
          Math.round(
            (cartPrice - MealData.getAllItems()[id].price + Number.EPSILON) *
              100
          ) / 100
      );
      mealNumbers[id]--;
      const tempAr = [];

      mealNumbers.map((item) => {
        tempAr.push(item);
      });

      setMealNumbers(tempAr);

      if (mealNumbers[id] === 0) {
        const tempCart = [];

        cart.forEach((element) => {
          if (element.id !== id) {
            tempCart.push(element);
          }
        });

        setCart(tempCart);
      }
    }
  };

  // log in warnin
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [displayEnoughPopUp, setDisplayEnoughPopUp] = useState(false);
  const [titleEnough, setTitleEnough] = useState("");
  const [bodyEnough, setBodyEnough] = useState("");

  const getMealsData = () => {
    let tempDict = {};
    mealNumbers.map((freq, index) => {
      if (freq > 0) {
        tempDict[MealData.getMeals()[index].mealName] = freq;
      }
    });

    return tempDict;
  };

  const handleNoSignUp = (e) => {
    e.preventDefault();
    DataCollection.registerActivity(
      "Shopping Cart",
      "Sign up skipped frm Shopping Cart"
    );

    const userLoggedIn = {
      id: "improper",
    };
    userSession.addUser(userLoggedIn);
    setDisplayPopUp(false);
    setDisplayUpSale(true);
  };

  /**
   * send Data to DB for DA purporses
   * STRIP INTEGRATION
   */
  const handleCheckOut = () => {
    if (numMealsSelected <= 0) {
      setTitleEnough("Not Enough Meals selected!!");
      setBodyEnough(<p>Select at least 1 meal</p>);
      setDisplayEnoughPopUp(true);
    } else {
      setDisplayPopUp(false);
      setDisplayUpSale(true);
    }
  };

  return (
    <Nav style={{ marginTop: "8px" }}>
      <button
        className="bg-light text-dark"
        style={{
          border: "0px",
          height: "34px",
          width: "56.67px",
          padding: "inherit",
          borderRadius: "10px",
          marginRight: "17px",
          marginBottom: "5px",
          boxShadow: "2px 1px 3px black",
        }}
        onClick={handleShow}
      >
        <i
          className="bi bi-cart3"
          style={{
            marginBottom: "12px",
            borderRadius: "10px",
            height: "36px",
          }}
        ></i>
      </button>
      {cart.length !== 0 ? (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ fontFamily: "Signika", height: "46%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="d-flex align-items-center justify-content-center">
              Shopping Cart
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container>
              {cart.map((item) => {
                return (
                  <Row key={item.id}>
                    <Col style={{ marginLeft: "100px", marginTop: "10px" }}>
                      <span>{mealNumbers[item.id]} </span>
                      <span>{item.mealName}</span>
                      <br></br>
                      <button
                        className="bg-primary text-light"
                        onClick={() => remove(item.id)}
                        style={{
                          borderRadius: "30px",
                          border: "0px",
                          backgroundColor: "rgb(247, 193, 68)",
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ padding: "0px" }}
                        >
                          remove
                        </span>
                      </button>

                      <span
                        style={{
                          fontSize: "40px",
                          paddingLeft: "20px",
                          paddingRight: "15px",
                        }}
                      >
                        {mealNumbers[item.id]}
                      </span>

                      <button
                        className="bg-primary text-light"
                        onClick={() => add(item.id)}
                        style={{
                          borderRadius: "30px",
                          border: "0px",
                          // backgroundColor: "rgb(247, 193, 68)",
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ padding: "4px" }}
                        >
                          add
                        </span>
                      </button>
                    </Col>
                  </Row>
                );
              })}
            </Container>
            <h5 className="text-center mt-4">{`${
              "Meals Total $" + cartPrice
            }`}</h5>
            <div className="h-45 d-flex align-items-center justify-content-center">
              <button
                onClick={() => {
                  clearCart();

                  handleClose();
                }}
                className="text-light bg-dark"
                style={{
                  // backgroundColor: "rgb(247, 193, 68)",
                  border: "0px",
                  height: "45px",
                  width: "145px",
                  borderRadius: "25px",
                  fontSize: "20px",
                }}
              >
                Clear Order
              </button>

              {/* <Link to="/checkOut" style={{ marginLeft: "24px" }}> */}
              <button
                onClick={() => handleCheckOut()}
                className="text-light bg-dark"
                style={{
                  // backgroundColor: "rgb(247, 193, 68)",
                  border: "0px",
                  height: "45px",
                  width: "145px",
                  borderRadius: "25px",
                  fontSize: "20px",
                }}
              >
                Check Out
              </button>
              {/* </Link> */}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      ) : (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ fontFamily: "Signika", height: "30%" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="d-flex align-items-center justify-content-center">
              Shopping Cart
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p className="text-center">Empty Cart Order Now</p>
            <div className="h-100 d-flex align-items-center justify-content-center">
              <button
                onClick={() => {
                  handleClose();
                  navigate("/order");
                }}
                className="text-light bg-dark"
                style={{
                  // backgroundColor: "rgb(247, 193, 68)",
                  border: "0px",
                  height: "45px",
                  width: "145px",
                  borderRadius: "25px",
                  fontSize: "20px",
                }}
              >
                Order Now
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}

      {/* login warning */}
      {(!userSession.isLoggedIn() ||
        userSession.getUser().id === "improper") && (
        <PopUp
          displayPopUp={displayPopUp}
          setDisplayPopUp={setDisplayPopUp}
          title={title}
          body={body}
        />
      )}

      <PopUp
        displayPopUp={displayEnoughPopUp}
        setDisplayPopUp={setDisplayEnoughPopUp}
        title={titleEnough}
        body={bodyEnough}
      />

      <Payment
        cart={cart}
        setCart={setCart}
        mealNumbers={mealNumbers}
        setMealNumbers={setMealNumbers}
        cartPrice={cartPrice}
        setCartPrice={setCartPrice}
        setNumMealsSelected={setNumMealsSelected}
        delivDate={delivDate}
        zipCode={zipCode}
      />

      <UpSaleItems
        displayPopUp={displayUpSale}
        setDisplayPopUp={setDisplayUpSale}
        cartPrice={cartPrice}
        setCartPrice={setCartPrice}
        cart={cart}
        setCart={setCart}
        zipCode={zipCode}
        mealNumbers={mealNumbers}
        setMealNumbers={setMealNumbers}
      />
    </Nav>
  );
};

export default ShoppingCart;
