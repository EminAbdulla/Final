import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { MainContext } from "../../Context/Context";
const Header = () => {
  const { handleSearch } = useContext(MainContext);
  return (
    <header>
      <div className="header__up">
        <div className="header__up__left">
          <div className="header__up__left__language">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/icon/header_icon.png.webp"
              alt=""
            />
            <select name="language">
              <option value="usa">USA</option>
              <option value="spa">SPA</option>
              <option value="cdn">CDN</option>
              <option value="usd">USD</option>
            </select>
          </div>
          <div className="header__up__left__phone">+777 2345 7886</div>
        </div>
        <div className="header__up__right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Admin</Link>
            </li>
            <li>
              <Link to="/basket">Basket</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="#">Checkout</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__left">
          <Link to="/">
            <img
              src="https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png.webp"
              alt=""
            />
          </Link>
        </div>
        <div className="header__bottom__middle">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">Category</Link>
            </li>
            <li>
              <Link to="#">Latest</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Pages</Link>
            </li>
          </ul>
        </div>
        <div className="header__bottom__right">
          <div className="header__bottom__right__search">
            <input
              type="text"
              placeholder="Search products"
              onChange={handleSearch}
            />
          </div>
          <div className="header__bottom__right__wishlist">
            <CiHeart />
          </div>
          <div className="header__bottom__right__basket">
            <FaShoppingCart />
          </div>
          <div className="header__bottom__right__button">
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
