const User = require("../models/user.model.js");

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const allUsers = await User.find({ _id: { $ne: loggedInUserId } }); // to show all users except the logged in user
    res.status(200).json(allUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = getUsersForSidebar;
