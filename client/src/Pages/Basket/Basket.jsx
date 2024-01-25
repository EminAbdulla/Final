import React, { useContext } from "react";
import "./Basket.scss";
import { MainContext } from "../../Context/Context";
import { Helmet } from "react-helmet";
const Basket = () => {
  const { basketItem, removeFromBasket, decreaseBasket, addToBasket } =
    useContext(MainContext);
  console.log(basketItem);
  return (
    <section>
      <Helmet>
        <title>Basket Page</title>
      </Helmet>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Decrease</th>
            <th>Price</th>
            <th>Increase</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {basketItem &&
            basketItem.map((item, index) => {
              return (
                <tr key={index}>
                  <th>
                    <img src={item.item.image} alt="" />
                  </th>
                  <th>{item.item.name}</th>
                  <th
                    onClick={() => {
                      decreaseBasket(item);
                    }}
                    disabled={item.count == 1}
                  >
                    -
                  </th>
                  <th>{item.item.price}$</th>
                  <th
                    onClick={() => {
                      addToBasket(item);
                    }}
                  >
                    +
                  </th>
                  <th
                    onClick={() => {
                      removeFromBasket(item);
                    }}
                  >
                    delete
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default Basket;
