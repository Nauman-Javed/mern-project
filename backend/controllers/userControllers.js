const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};

const getMe = (req, res) => {
  res.json({ message: "User" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
