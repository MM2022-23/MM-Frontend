/**
 * Have global state to inform quantity of which chef's meals has been changed from cart
 * in this component in have 1 useEffect run when that global state is changed
 */
import React, { useState } from "react";
import { chefs } from "../../../Service/Constants";
import { useParams } from "react-router-dom";
import ScrollTop from "../../../Service/Misc/ScrollTop";
import { useEffect } from "react";

const Chef = ({
  zipCode,
  cart,
  setCart,
  totalPrice,
  setTotalPrice,
  numMealsSelected,
  setNumMealsSelected,
  numMeals,
  cartPrice,
  setCartPrice,
}) => {
  const { id } = useParams();
  useEffect(() => {
    ScrollTop.scrollUp();
    setMealsQuantity(new Array(meals.length).fill(0));

    // might have to remove this statement bc we need to conserve cart even if we come here from some other page
    setCart([]);
  }, []);
  const chefInfo = chefs[id - 1];
  const meals = chefInfo.meals;
  const [mealsQuantity, setMealsQuantity] = useState([]);

  const incrementMealQuantity = (index) => {
    const updatedMealsQuantity = [...mealsQuantity];
    updatedMealsQuantity[index] += 1;
    setMealsQuantity(updatedMealsQuantity);
  };

  const decrementMealQuantity = (index) => {
    if (mealsQuantity[index] > 0) {
      const updatedMealsQuantity = [...mealsQuantity];
      updatedMealsQuantity[index] -= 1;
      setMealsQuantity(updatedMealsQuantity);
    }
  };
  return (
    <section class="h-100 gradient-custom-2">
      <div class="container py-5 h-100">    
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-9 col-xl-7">
            <div class="card">
              <div
                class="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#f5deb3", height: "200px" }}
              >
                <div
                  class="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    class="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: "150px", zIndex: "1" }}
                  />
                </div>
                <div class="ms-3" style={{ marginTop: "30px" }}>
                  <h5 className="text-dark">{chefInfo.name}</h5>
                  <p className="text-secondary">{chefInfo.locationOfService}</p>
                </div>
              </div>

              <div class="card-body p-4 text-black">
                <div class="mb-5">
                  <p class="lead fw-normal mb-1">About</p>
                  <div class="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <p class="font-italic mb-1">
                      10+ years of experience in Cooking
                    </p>
                    <p class="font-italic mb-1">Catered for 1000+ ocassions</p>
                  </div>
                </div>
                <p class="lead fw-normal mb-0 text-center">Select Meals</p>


                {/* Meals */}

                <div class="row g-2">
                  {meals.map(
                    (meal, index) =>
                      index % 2 === 0 && (
                        <div className="row g-2" key={`row-${index}`}>
                          <div className="col">
                            <img
                              src={require(`../../../Resources/Meals/${meal.img}`)}
                              alt={`image ${index + 1}`}
                              className="w-100 rounded-3"
                            />

                            <div className="mt-1 d-flex flex-column align-items-center">
                              <div className="mb-2">
                                <button
                                  className="btn btn-light btn-lg rounded-circle"
                                  style={{ minWidth: "40px", fontSize: "24px" }}
                                  onClick={() => decrementMealQuantity(index)}
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
                                  {mealsQuantity[index]}
                                </span>{" "}
                                <button
                                  className="btn btn-light btn-lg rounded-circle"
                                  style={{ minWidth: "40px", fontSize: "24px" }}
                                  onClick={() => incrementMealQuantity(index)}
                                >
                                  +
                                </button>
                                <p
                                  className="text-light text-center"
                                  style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Description
                                </p>
                                <p
                                  className="text-dark text-center"
                                  style={{
                                    fontSize: "1.2rem",
                                    fontWeight: "bold",
                                  }}
                                >
                                  12.99
                                </p>
                              </div>
                            </div>
                          </div>
                          {meals[index + 1] && (
                            <div className="col">
                              <img
                                src={require(`../../../Resources/Meals/${
                                  meals[index + 1].img
                                }`)}
                                alt={`image ${index + 2}`}
                                className="w-100 rounded-3"
                              />
                              <div className="mt-1 d-flex flex-column align-items-center">
                                <div className="mb-2">
                                  <button
                                    className="btn btn-light btn-lg rounded-circle"
                                    style={{
                                      minWidth: "40px",
                                      fontSize: "24px",
                                    }}
                                    onClick={() =>
                                      decrementMealQuantity(index + 1)
                                    }
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
                                    {mealsQuantity[index + 1]}
                                  </span>{" "}
                                  <button
                                    className="btn btn-light rounded-circle btn-lg"
                                    style={{
                                      minWidth: "40px",
                                      fontSize: "24px",
                                    }}
                                    onClick={() =>
                                      incrementMealQuantity(index + 1)
                                    }
                                  >
                                    +
                                  </button>
                                  <p
                                    className="text-light text-center"
                                    style={{
                                      fontSize: "1.2rem",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Description
                                  </p>
                                  <p
                                    className="text-dark text-center"
                                    style={{
                                      fontSize: "1.2rem",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    12.99
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
                  <div className="h-100 d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-secondary text-primary btn-md"
                      style={{ minWidth: "40px", fontSize: "20px" }}
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
  );
};

export default Chef;
