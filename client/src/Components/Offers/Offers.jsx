import React from "react";
import "./Offers.scss";
const Offers = () => {
  return (
    <section className="offers">
      <div className="background__image">
        <img
          src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-offer.png.webp"
          alt=""
        />
      </div>
      <div className="image__left">
        <img
          src="https://preview.colorlib.com/theme/estore/assets/img/collection/latest-man.png.webp"
          alt=""
        />
      </div>
      <div className="offers__left">
        <div className="offers__left__left">
          <h1>Get Our Latest Offers News</h1>
          <p>Subscribe news latter</p>
        </div>
        <div className="offers__right">
          <input type="email" placeholder="Your email here" />
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
