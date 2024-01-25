const express = require("express");
const { Final } = require("../Model/Final.model");
const FinalController = {
  getAll: async (req, res) => {
    try {
      const products = await Final.find({});
      res.status(200).send(products);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const target = await Final.findById(id);
      res.status(200).send(target);
    } catch (error) {
      res.status(404).send(error);
    }
  },
  add: async (req, res) => {
    const { name, description, image, price, rating, discount } = req.body;
    const newFinal = new Final({
      name,
      description,
      image,
      price,
      rating,
      discount,
    });
    await newFinal.save();
    const products = await Final.find({});
    res.status(200).send(products);

    try {
    } catch (error) {
      res.status(404).send(error);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedProduct = await Final.findByIdAndDelete(id);
      const products = await Final.find({});
      res.status(200).send(products);
    } catch (error) {
      res.status(404).send(error);
    }
  },
};
module.exports = { FinalController };
