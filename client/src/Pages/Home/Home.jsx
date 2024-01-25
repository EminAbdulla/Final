import React, { useContext } from "react";
import { MainContext } from "../../Context/Context";
import Hero from "../../Components/Hero/Hero";
import Category from "../../Components/Category/Category";
import Products from "../../Components/Products/Products";
import { Helmet } from "react-helmet";
import Offers from "../../Components/Offers/Offers";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Hero />
      <Category />
      <Products />
      <Offers />
    </>
  );
};

export default Home;
