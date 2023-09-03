const asyncHanlder = require("express-async-handler");

const getGoals = asyncHanlder(async (req, res) => {
  res.status(200).send({ message: "Goals found" });
});

const setGoals = asyncHanlder(async (req, res) => {
  console.log(req.body);
  res.status(200).send({ message: "Set Goal" });
});

const updateGoals = asyncHanlder(async (req, res) => {
  res.status(200).send({ message: `update goal ${req.params.id}` });
});

const deleteGoals = asyncHanlder(async (req, res) => {
  res.status(200).send({ message: `delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
