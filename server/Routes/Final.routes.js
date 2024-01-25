const express = require("express");
const router = express.Router();
const { FinalController } = require("../Controller/Final.controller");
router.get("/", FinalController.getAll);
router.get("/:id", FinalController.getById);
router.post("/", FinalController.add);
router.delete("/:id", FinalController.delete);
module.exports = router;
