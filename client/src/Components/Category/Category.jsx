import React from "react";
import "./Category.scss";
const Category = () => {
  return (
    <section className="category">
      <div className="category__header">
        <h1>Shop by Category</h1>
      </div>
      <div className="category__middle">
        <div className="category__middle__left">
          <div className="category__middle__left__left">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg.webp"
              alt=""
            />
          </div>
          <div className="category__middle__left__right">
            <div className="category__middle__left__right__header">Owmen`S</div>
            <div className="category__middle__left__right__button">
              <button>Best New Deals</button>
            </div>
            <div className="category__middle__left__right__text">
              <i>New Collection</i>
            </div>
          </div>
        </div>

        <div className="category__middle__middle">
          <div className="category__middle__middle__left">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg.webp"
              alt=""
            />
          </div>
          <div className="category__middle__middle__right">
            <div className="category__middle__middle__right__header">
              <i>Discount!</i>
            </div>
            <div className="category__middle__middle__right__button">
              Winter Cloth
            </div>
            <div className="category__middle__middle__right__text">
              New Collection
            </div>
          </div>
        </div>

        <div className="category__middle__right">
          <div className="category__middle__right__left">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg.webp"
              alt=""
            />
          </div>
          <div className="category__middle__right__right">
            <div className="category__middle__right__right__header">
              Owmen`S
            </div>
            <div className="category__middle__right__right__button">
              <button>Best New Deals</button>
            </div>
            <div className="category__middle__right__right__text">
              <i>New Collection</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
