import React, { useContext } from "react";
import "./Products.scss";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context/Context";
const Products = () => {
  const {
    addToBasket,
    addToWishlist,
    sortHigh,
    sortLow,
    filteredData,
    totalPrice,
    setTotalPrice,
  } = useContext(MainContext);
  return (
    <section className="products">
      <div className="products__up">
        <div className="products__up__left">
          <h1>Latest Products</h1>
        </div>
        <div className="products__up__right">
          <div className="sort__by__price">
            <button onClick={sortHigh}>High</button>
            <button onClick={sortLow}>Low</button>
          </div>
          <div className="search">
            <input type="text" placeholder="Search by name..." />
          </div>
        </div>
      </div>
      <hr />
      <div className="products__bottom">
        {filteredData.map((item, index) => {
          return (
            <div className="products__bottom__card" key={index}>
              <div className="products__bottom__card__image">
                <img src={item.image} alt="" />
              </div>
              <div className="products__bottom__card__rating">
                <span className="color">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </span>
                <span>
                  <CiStar />
                  <CiStar />
                </span>
              </div>
              <div className="products__bottom__card__description">
                <Link to={`/${item._id}`}>
                  {item.description}
                </Link>
              </div>
              <div className="products__bottom__card__price">
                <div className="new__price">
                  ${(item.price * item.discount) / 100}
                </div>
                <div className="old__price">${item.price}</div>
              </div>
              <div className="products__bottom__card__buttons">
                <button
                  className="Wishlist__button"
                  onClick={() => {
                    addToBasket(item);
                  }}
                >
                  Add to Basket
                </button>
                <button
                  className="Wishlist__button"
                  onClick={() => {
                    addToWishlist(item);
                  }}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
