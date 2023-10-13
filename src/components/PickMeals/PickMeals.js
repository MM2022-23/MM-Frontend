/**
 *  For now can look in csv file for meal data based on zip code entered
 *  Scaling: might need API call to search meal info based on given zip code
 */

import DataCollection from "../../Service/Data/DataCollection";
import DataCollectionAPIService from "../../Service/APICalls/DataCollectionAPIService";
import Payment from "../../SharedComponents/PopUp/Payment/Payment";
import SignUpPopUp from "../NavBar/SignUpPopUp/SignUpPopUp";
import LogInPopUP from "../NavBar/LogInPopUp/LogInPopUp";
import userSession from "../../Service/Data/userSession";
import PopUp from "../../SharedComponents/PopUp/PopUp";
import "./PickMeals.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ScrollTop from "../../Service/Misc/ScrollTop";
import MealData from "../../Service/Data/MealData";
import UpSaleItems from "../../SharedComponents/UpSaleItems/UpSaleItems";
import ReactGA from "react-ga4";
import { chefs } from "../../Service/Constants";
import Banner from "../Home/Banner/Banner";
import { useParams } from "react-router-dom";
const PickMeals = ({
  zipCode,
  cart,
  setCart,
  mealNumbers,
  setMealNumbers,
  setResetOrderPageInfo,
  numMealsSelected,
  setNumMealsSelected,
  setLogIn,
  numMeals,
  cartPrice,
  setCartPrice,
  delivDate,
}) => {
  // so we can go back to orderPage
  const navigate = useNavigate();

  const { chefId } = useParams();
  const chefInfo = chefs[chefId ? chefId : 2 - 1];
  const mealList = chefInfo.meals;
  useEffect(() => {
    // scroll up only once when user arrives on this page
    ScrollTop.scrollUp();
    if (!mealNumbers || mealNumbers.length === 0) {
      const temp = new Array(MealData.getAllItems().length).fill(0);
      setMealNumbers(temp);
    }
    console.log(`Meal Numbers: ${mealNumbers}`);
  }, []);

  // pop up to show description/ingridents to users
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [mealSelected, setMealSelected] = useState("");

  const [displayUpSale, setDisplayUpSale] = useState(false);

  // What if user wants to reset freq, zipcode, etc...?? => we let user go back to OrderPage
  const backToOrderPage = () => {
    setCart([]);
    setCartPrice(0);
    setNumMealsSelected(0);
    setMealNumbers([]);
    setResetOrderPageInfo(2); // reset everything in orderPage
    // console.log("<== BACK BUTTON CLICKED...");
    navigate("/chefs");
  };

  // Handles PopUp display
  const handleDisplay = (descrption, mealName) => {
    // content
    if (Array.isArray(descrption)) {
      let contentString = "";
      for (let index = 0; index < descrption.length; index++) {
        const element = descrption[index];
        if (index != descrption.length - 1) {
          contentString += `${element}, `;
        } else {
          contentString += `and ${element}`;
        }
      }
      const showList = (
        <ul>
          {descrption.map((item, index) => {
            return <li key={index}>{`1 ${item}`}</li>;
          })}
        </ul>
      );
      setDescription(showList);
      setMealSelected(mealName);
      setShow(true);
    } else {
      //description
      setDescription(descrption);
      setMealSelected(mealName);
      setShow(true);
    }
  };

  // closes description pop up when user closes it
  const handleClose = () => {
    setDescription("");
    setMealSelected("");
    setShow(false);
  };

  /**
   * @Goal ADD item to cart && increment quantity by 1
   * @param idNum of item to be added
   * 1. Increment quantity in mealNumbers at index "id"
   * 2. Update cart by setCart()
   */

  const add = (idNum) => {
    setNumMealsSelected((numMealsSelected) => numMealsSelected + 1);
    setCartPrice(
      (cartPrice) =>
        Math.round((cartPrice + mealList[idNum].price + Number.EPSILON) * 100) /
        100
    );
    // will have to add PRICE
    const addToCart = {
      chefId: chefId,
      id: idNum,
      mealName: mealList[idNum].mealName,
      description: mealList[idNum].description,
      price: mealList[idNum].price,
    };

    const tempArray = [];

    if (cart.length === 0) {
      // cart is empty
      tempArray.push(addToCart);
      setCart(tempArray);
    } else {
      // cart is NOT empty; 2 cases: idNum IS in cart OR NOT in the cart

      // don't wanna add duplicate items
      let found = false;

      cart.forEach((element) => {
        if (element.id === idNum) {
          found = true;
        }
        tempArray.push(element);
      });

      // adding item first time
      if (!found) {
        tempArray.push(addToCart);
      }
      setCart(tempArray); // Update cart to display correct items in cart
    }

    mealNumbers[idNum]++; // increment quantity in mealNumbers at index "idNum"
    const newAr = [];
    mealNumbers.map((item) => {
      newAr.push(item);
    });
    setMealNumbers(newAr); // Update mealNumbers to display correct quantity numbers in cart AND pickMeals page
  };

  /**
   * @Goal REMOVE item from cart && decrement quantity by 1
   * @param id of item to be removed/reduced
   * 1. Decrement quantity in mealNumbers at index "idNum"
   * 2. Update cart by setCart()
   */
  const remove = (id) => {
    // CANNOT have quantity < 0
    if (mealNumbers[id] > 0) {
      setNumMealsSelected((numMealsSelected) => numMealsSelected - 1);
      setCartPrice(
        (cartPrice) =>
          Math.round((cartPrice - mealList[id].price + Number.EPSILON) * 100) /
          100
      );
      mealNumbers[id]--; // decrement quantity in mealNumbers at index "id"
      const newAr = [];
      mealNumbers.map((item) => {
        newAr.push(item);
      });
      setMealNumbers(newAr); // update mealNumbers

      if (mealNumbers[id] === 0) {
        // if item is reduced to 0 in cart, cart should be updated so we don't have an item in cart whose quantity = 0
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

  const [displayEnoughPopUp, setDisplayEnoughPopUp] = useState(false);
  const [titleEnough, setTitleEnough] = useState("");
  const [bodyEnough, setBodyEnough] = useState("");

  /**
   * send Data to DB for DA purporses
   * STRIP INTEGRATION
   */
  const handleCheckOut = () => {
    if (numMealsSelected === 0) {
      setTitleEnough("Not Enough Meals selected!!");
      setBodyEnough(<p>Select at least 1 meal</p>);
      setDisplayEnoughPopUp(true);
    } else {
      setDisplayUpSale(true);
    }
  };

  return (
    <>
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{
                    backgroundColor: "rgba(216,255,218,1)",
                    height: "200px",
                  }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src={chefInfo.imgSrc}
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "150px", zIndex: "1" }}
                    />
                  </div>
                  <div className="ms-3" style={{ marginTop: "30px" }}>
                    <h5 className="text-dark">{chefInfo.name}</h5>
                    <p className="text-dark">{chefInfo.locationOfService}</p>
                  </div>
                </div>

                <div className="card-body p-4 text-black">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <p className="font-italic mb-1">
                        {chefInfo.description2}
                      </p>
                      {/* <p className="font-italic mb-1">
                        Catered for 1000+ ocassions
                      </p> */}
                    </div>
                  </div>
                  <p className="lead fw-normal mb-0 text-center">
                    Select Meals
                  </p>
                  <div className="row g-2">
                    {mealList.map(
                      (meal, index) =>
                        index % 2 === 0 && (
                          <div className="row g-2" key={`row-${index}`}>
                            <div className="col">
                              <img
                                src={require(`../../Resources/Meals/${meal.img}`)}
                                alt={`image ${index + 1}`}
                                className="w-100 rounded-3"
                              />
                              <div className="text-center">{meal.mealName}</div>
                              <Link
                                onClick={() =>
                                  handleDisplay(meal.description, meal.mealName)
                                }
                                to=""
                              >
                                <p
                                  className="text-dark text-center"
                                  style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Description
                                </p>
                              </Link>

                              <div className="mt-1 d-flex flex-column align-items-center">
                                <div className="mb-2">
                                  <button
                                    className="btn btn-primary btn-lg rounded-circle"
                                    style={{
                                      minWidth: "40px",
                                      fontSize: "24px",
                                    }}
                                    onClick={() => remove(index)}
                                  >
                                    -
                                  </button>
                                  <span
                                    className="mx-2"
                                    style={{
                                      fontSize: "2rem",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {mealNumbers[index]}
                                  </span>{" "}
                                  <button
                                    className="btn btn-primary btn-lg rounded-circle"
                                    style={{
                                      minWidth: "40px",
                                      fontSize: "24px",
                                    }}
                                    onClick={() => add(index)}
                                  >
                                    +
                                  </button>
                                  <p
                                    className="text-dark text-center"
                                    style={{
                                      fontSize: "1.2rem",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    ${meal.price}
                                  </p>
                                </div>
                              </div>
                            </div>
                            {mealList[index + 1] && (
                              <div className="col">
                                <img
                                  src={require(`../../Resources/Meals/${
                                    mealList[index + 1].img
                                  }`)}
                                  alt={`image ${index + 1}`}
                                  className="w-100 rounded-3"
                                />

                                <div className="text-center">
                                  {mealList[index + 1].mealName}
                                </div>
                                <Link
                                  onClick={() =>
                                    handleDisplay(
                                      mealList[index + 1].description,
                                      mealList[index + 1].mealName
                                    )
                                  }
                                  to=""
                                >
                                  <p
                                    className="text-dark text-center"
                                    style={{
                                      fontSize: "1.2rem",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Description
                                  </p>
                                </Link>
                                <div className="mt-1 d-flex flex-column align-items-center">
                                  <div className="mb-2">
                                    <button
                                      className="btn btn-primary btn-lg rounded-circle"
                                      style={{
                                        minWidth: "40px",
                                        fontSize: "24px",
                                      }}
                                      onClick={() => remove(index + 1)}
                                    >
                                      -
                                    </button>
                                    <span
                                      className="mx-2"
                                      style={{
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {mealNumbers[index + 1]}
                                    </span>{" "}
                                    <button
                                      className="btn btn-primary rounded-circle btn-lg"
                                      style={{
                                        minWidth: "40px",
                                        fontSize: "24px",
                                      }}
                                      onClick={() => add(index + 1)}
                                    >
                                      +
                                    </button>
                                    <p
                                      className="text-dark text-center"
                                      style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      ${mealList[index + 1].price}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )
                    )}
                  </div>

                  <div className="row">
                    <div className=" col py-2  d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-dark text-light btn-md"
                        style={{ minWidth: "100px", fontSize: "20px" }}
                        onClick={() => backToOrderPage()}
                      >
                        Back
                      </button>
                    </div>
                    <div className=" col py-2  d-flex align-items-center justify-content-center">
                      <button
                        className="btn btn-dark text-light btn-md"
                        style={{ minWidth: "40px", fontSize: "20px" }}
                        onClick={() => handleCheckOut()}
                      >
                        Proceed
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} style={{ fontFamily: "Signika" }}>
        <Modal.Header closeButton>
          <Modal.Title>{mealSelected}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
    </>
  );
};

export default PickMeals;
