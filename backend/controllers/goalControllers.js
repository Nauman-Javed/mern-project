const getGoals = (req, res) => {
  res.status(200).send({ message: "Goals found" });
};

const setGoals = (req, res) => {
  res.status(200).send({ message: "Set Goal" });
};

const updateGoals = (req, res) => {
  res.status(200).send({ message: `update goal ${req.params.id}` });
};

const deleteGoals = (req, res) => {
  res.status(200).send({ message: `delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
