import React from "react";
import MealData from "../../Service/Data/MealData";
import PopUp from "../../SharedComponents/PopUp/PopUp";
import { useState } from "react";
function ProfileSection() {
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const createBody = (mealInfo) => {
    setTitle("Title");
    return (
      <div>
        <div>Image</div>
        <div>Name</div>
        <div>$12.99</div>
        <div>Description1</div>
      </div>
    );
  };
  return (
    <section className="gradient-custom-2">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card">
              <div
                className="rounded-top text-white d-flex flex-column justify-content-center align-items-center"
                style={{
                  backgroundColor: "rgba(145, 235, 233,1)",
                  minHeight: "200px",
                }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image"
                  className="img-fluid img-thumbnail mt-4 mb-2 rounded-circle"
                  style={{ width: "150px", zIndex: 1 }}
                />
                <button
                  type="button"
                  className="btn mt-2 btn-dark text-primary"
                  //   style={{ backgroundColor: "#f8f9fa" }}
                >
                  Download Analytics
                </button>

                <h5 className="mt-3 mb-1 text-black">Rutvik Taang</h5>
                <p className="text-center mb-0 text-black">Edison, NJ</p>
              </div>
              <div className="card-body p-4 text-black">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">
                    How to update information
                  </p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <p className="font-italic mb-1">
                      Dear Chefs, For any updates to your meal listings, please
                      email us at supports@mirchimeals.com. We appreciate your
                      cooperation in keeping our platform accurate. Thank you.
                      Best regards, Mirchi Meals
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <p className="lead fw-normal mb-0">Current Meals</p>
                </div>
                <div className="row g-2">
                  <div className="col-6 col-md-3 mb-2">
                    <img
                      src={require(`../../Resources/Meals/${MealData.data[0].img}`)}
                      alt="image 1"
                      className="w-100 rounded-3"
                      onClick={() => {
                        setDisplay(true);
                        setBody(createBody(null));
                      }}
                    />
                  </div>
                  <div className="col-6 col-md-3 mb-2">
                    <img
                      src={require(`../../Resources/Meals/${MealData.data[1].img}`)}
                      alt="image 1"
                      className="w-100 rounded-3"
                      onClick={() => {
                        setDisplay(true);
                        setBody(createBody(null));
                      }}
                    />
                  </div>
                  <div className="col-6 col-md-3 mb-2">
                    <img
                      src={require(`../../Resources/Meals/${MealData.data[2].img}`)}
                      alt="image 1"
                      className="w-100 rounded-3"
                      onClick={() => {
                        setDisplay(true);
                        setBody(createBody(null));
                      }}
                    />
                  </div>
                  <div className="col-6 col-md-3 mb-2">
                    <img
                      src={require(`../../Resources/Meals/${MealData.data[3].img}`)}
                      alt="image 1"
                      className="w-100 rounded-3"
                      onClick={() => {
                        setDisplay(true);
                        setBody(createBody(null));
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopUp
        displayPopUp={display}
        setDisplayPopUp={setDisplay}
        title={title}
        body={body}
      />
    </section>
  );
}

export default ProfileSection;
