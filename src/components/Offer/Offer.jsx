import React from "react";
import "./Offer.scss";
import offerone from "../../images/watches/layout-1.jpg";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Offer = () => {
  return (
    <div className="container offer">
      <h2>spicial offers for you.</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="card-container">
            <div className="card mb-3">
              <div className="offer-mark">offer %30</div>

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
                      <button className="atc btn">add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-container">
            <div className="card mb-3">
              <div className="offer-mark">offer %30</div>

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
                      <button className="atc btn">add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-container">
            <div className="card mb-3">
              <div className="offer-mark">offer %30</div>

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
                      <button className="atc btn">add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-container">
            <div className="card mb-3">
              <div className="offer-mark">offer %30</div>

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
                      <button className="atc btn">add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Offer;
