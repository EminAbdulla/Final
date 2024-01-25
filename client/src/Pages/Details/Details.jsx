import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/final/${id}`).then((res) => {
      setData([...res.data]);
    });
  }, [id]);
  return (
    <div>
      <Helmet>
        <title>Detail Page</title>
      </Helmet>
      <h1>{data.name}</h1>
      <img src={data.image} alt="" />
    </div>
  );
};

export default Details;
