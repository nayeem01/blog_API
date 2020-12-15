const express = require("express");
const router = express.Router();
const {
    getUser,
    newUser,
    getUserbyID,
    updateUser,
    removeUser,
} = require("../controllers/UserController");

router.route("/").get(getUser).post(newUser);
router.route("/:id").get(getUserbyID).put(updateUser).delete(removeUser);

module.exports = router;
