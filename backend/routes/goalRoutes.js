const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Goals found" });
});

router.post("/", (req, res) => {
  res.status(200).send({ message: "Set Goal" });
});

router.put("/:id", (req, res) => {
  res.status(200).send({ message: `update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).send({ message: `delete goal ${req.params.id}` });
});

module.exports = router;
