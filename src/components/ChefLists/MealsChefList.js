import React from "react";
import { Link } from "react-router-dom";
import { chefs } from "../../Service/Constants";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import { useEffect } from "react";
import ScrollTop from "../../Service/Misc/ScrollTop";
const MealsChefList = () => {
  useEffect(() => {
    ScrollTop.scrollUp();
  }, []);
  const tempList = () => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  };
  const list = () => {
    return (
      <section className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded">
        {chefs.map((chef) => (
          <div className="row  justify-content-center">
            <div className="">
              <div className="card">
                <div className="card-body m-3">
                  <div className="row">
                    <div className="col-lg-4 justify-content-center align-items-center mb-4 mb-lg-0">
                      <img
                        src={chef.imgSrc}
                        className="rounded-circle img-fluid shadow-1"
                        alt="woman avatar"
                        width="200"
                        height="200"
                      />
                    </div>
                    <div className="col-lg-8">
                      <p className="text-muted fw-light mb-4">
                        {chef.description1}
                      </p>
                      <p className="fw-bold lead mb-2">
                        <strong>{chef.name}</strong>
                      </p>
                      <div className="row">
                        <Link to={`/chef/${chef.id}`}>
                          <button className="btn btn-dark text-center justify-content-center">
                            View
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };
  return (
    <div className="container mt-4">
      <h2 className="text-center pt-2">Meet Our Chefs</h2>
      <div className="d-flex flex-wrap">{list()}</div>
    </div>
  );
};

export default MealsChefList;
