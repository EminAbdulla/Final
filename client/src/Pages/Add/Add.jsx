import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { MainContext } from "../../Context/Context";
import "./Add.scss"
const Add = () => {
  const { setData, setFilteredData, data, filteredData, handleDelete } =
    useContext(MainContext);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
      price: "",
      rating: "",
      discount: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      image: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      rating: Yup.number().required("Required"),
      discount: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      axios.post("http://localhost:8000/final", { ...values }).then((res) => {
        setData([...res.data]);
        setFilteredData([...res.data]);
      });
      formik.resetForm();
    },
  });
  return (
    <section>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}

        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          type="string"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div>{formik.errors.image}</div>
        ) : null}

        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}

        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          name="rating"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rating}
        />
        {formik.touched.rating && formik.errors.rating ? (
          <div>{formik.errors.rating}</div>
        ) : null}

        <label htmlFor="discount">Discount</label>
        <input
          id="discount"
          name="discount"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.discount}
        />
        {formik.touched.discount && formik.errors.discount ? (
          <div>{formik.errors.discount}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredData &&
            filteredData.map((item, index) => {
              return (
                <tr key={index}>
                  <th>
                    <img src={item.image} alt="" />
                  </th>
                  <th>{item.name}</th>
                  <th>{item.description}</th>
                  <th>{item.price}$</th>
                  <th>{item.discount}%</th>
                  <th
                    onClick={() => {
                      handleDelete(item._id);
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

export default Add;
