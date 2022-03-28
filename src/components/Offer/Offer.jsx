import React from "react";
import "./Offer.scss";
import offerone from "../../images/watches/layout-1.jpg";

const Offer = () => {
  return (
    <div className="container offer">
      <h2>spicial offers for you.</h2>
      <div className="carousel-wrapper">
        <div className="carousel" data-flickity>
          <div className="card-container">
            <div className="card mb-3">
              <div className="offer-mark">
                offer %30
              </div>
              
              <div className="row g-0">
                <div className="col-4">
                  <img
                    src={offerone}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <div className="offer-price">
                      <div className="price">
                        <div className="old-price">5200 $</div>
                      <div className="new-price">4800 $</div>
                      </div>
                      <a href="/">
                        add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card mb-3">
              <div className="offer-mark">
                offer %30
              </div>
              <div className="row g-0">
                <div className="col-4">
                  <img
                    src={offerone}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <div className="offer-price">
                      <div className="price">
                        <div className="old-price">5200 $</div>
                      <div className="new-price">4800 $</div>
                      </div>
                      <a href="/">
                        add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="card mb-3">
              <div className="offer-mark">
                offer %30
              </div>
              <div className="row g-0">
                <div className="col-4">
                  <img
                    src={offerone}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                    <div className="offer-price">
                      <div className="price">
                        <div className="old-price">5200 $</div>
                      <div className="new-price">4800 $</div>
                      </div>
                      <a href="/">
                        add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
