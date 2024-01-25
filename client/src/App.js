import { MainContext } from "./Context/Context";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Home from "./Pages/Home/Home";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import Add from "./Pages/Add/Add";
import Basket from "./Pages/Basket/Basket";
function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [basketItem, setBasketItem] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );
  const [wishlistItem, setWishlistItem] = useState(
    localStorage.getItem("wishlistItems")
      ? JSON.parse(localStorage.getItem("wishlistItems"))
      : []
  );
  //getData

  useEffect(() => {
    axios.get("http://localhost:8000/final").then((res) => {
      setData([...res.data]);
      setFilteredData([...res.data]);
    });
  }, []);

  /////////
  //deleteData
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/final/${id}`).then((res) => {
      setData([...res.data]);
      setFilteredData([...res.data]);
      toast.error("item deleted");
    });
  };
  ////////////////////
  //Basket
  const addToBasket = (item) => {
    const target = basketItem.find((myitem) => myitem._id == item._id);
    if (!target) {
      const newFinal = {
        _id: item._id,
        count: 1,
        item: item,
        totalPrice: item.totalPrice,
      };
      setBasketItem([...basketItem, newFinal]);
      localStorage.setItem(
        "basketItems",
        JSON.stringify([...basketItem, newFinal])
      );
      toast.success("item added to basket");
    } else {
      const target = basketItem.find((myitem) => myitem.item._id == item._id);
      target.count += 1;
      target.totalPrice = target.count * target.item.price;
      setBasketItem([...basketItem]);
      localStorage.setItem("basketItems", JSON.stringify([...basketItem]));
      toast.success("item added to basket");
    }
  };
  const removeFromBasket = (item) => {
    const target = basketItem.find((myitem) => myitem._id == item._id);
    basketItem.splice(basketItem.indexOf(target), 1);
    setBasketItem([...basketItem]);
    localStorage.setItem("basketItems", JSON.stringify([...basketItem]));
    toast.error("item deleted from basket");
  };
  const decreaseBasket = (item) => {
    const target = basketItem.find((myitem) => myitem._id == item._id);
    target.count -= 1;
    target.totalPrice = target.count * target.item.price;
    setBasketItem([...basketItem]);
    localStorage.setItem("basketItems", JSON.stringify([...basketItem]));
    toast.error("item decreased from basket");
  };
  ///////////////

  //wishlist
  const addToWishlist = (item) => {
    const target = wishlistItem.find(
      (wishlistItem) => wishlistItem._id == item._id
    );
    if (target) {
      toast.error("item already in wishlist");
    } else {
      setWishlistItem([...wishlistItem, item]);
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify([...basketItem, item])
      );
      toast.success("item added to wishlist");
    }
  };
  const removeFromWishlist = (item) => {
    const target = wishlistItem.find(
      (wishlistItem) => wishlistItem._id == item._id
    );
    wishlistItem.splice(wishlistItem.indexOf(target), 1);
    setWishlistItem([...wishlistItem]);
    localStorage.setItem("wishlistItems", JSON.stringify([...basketItem]));
    toast.error("item deleted from wishlist");
  };
  ////////////////////////////////

  //Filter
  const sortLow = () => {
    const lowToHigh = () => {
      filteredData.sort((a, b) => a.price - b.price);
    };
    setFilteredData([...lowToHigh]);
  };

  const sortHigh = () => {
    const highToLow = () => {
      filteredData.sort((a, b) => b.price - a.price);
    };
    setFilteredData([...highToLow]);
  };
  /////////////////////////////////////
  //search
  const handleSearch = (e) => {
    const search = e.target.value.trim().toLowerCase();
    if (search == "") {
      setFilteredData([...data]);
    } else {
      const serached = filteredData.filter((x) =>
        x.name.trim().toLowerCase().includes(search)
      );
      setFilteredData([...serached]);
    }
  };
  const values = {
    data,
    setData,
    filteredData,
    setFilteredData,
    addToBasket,
    removeFromBasket,
    decreaseBasket,
    addToWishlist,
    removeFromWishlist,
    handleDelete,
    handleSearch,
    sortLow,
    sortHigh,
    totalPrice,
    setTotalPrice,
    basketItem
  };
  return (
    <MainContext.Provider value={values}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/add" element={<Add />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </MainContext.Provider>
  );
}

export default App;
